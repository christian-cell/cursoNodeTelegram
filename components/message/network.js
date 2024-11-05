const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const path = require('path');

const storage = multer.diskStorage({

    destination: function(req, file, cb) {

        cb(null, 'uploads/'); 
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}-${ext}`);
    }
});

const upload = multer({ storage: storage });

router.get('/',function(req,res){

    const { query : { user } } = req || {};

    const filterMessages = user || null;

    controller.getMessages( filterMessages ).then(( messageList ) => {

        response.success(req, res, messageList, 200);
    
    }).catch((error) => {

        console.log(`Unexpected error : ${error}`);
        
        response.error(req, res, `Unexpected error : ${error}` , 500 , error);
    })
})

router.post('/', upload.single('file'), function(req,res){

    const file = req.file;

    console.log('Archivo subido:', file);

    const { body : { chat ,user , message} } = req || {};

    controller.addMessage( chat , user , message ).then( ( fullMessage ) => {

        response.success(req, res, fullMessage ,201);
    
    }).catch(( error ) => {

        response.error(req,res,'información invalida',400,`con error: ${error}`);
    })
})

router.patch('/:id' , function ( req , res ){

    const { params : { id } , body : { message } } = req || {};


    controller.updateMessage(id , message).then(( data ) => {

        response.success(req, res, data, 200);
    
    }).catch((error) => {

        response.error(req, res, `Error interno , error : ${error}`, 500, error);
    })
})

router.delete('/:id',function(req,res){

    const { params : { id } } = req || {};
    
    controller.deleteMessage( id ).then(() => {

        response.success(req , res, `Mensaje con id : ${id} eliminado` , 200);
    
    }).catch(( error ) => {

        response.error(req, res, `Error interno , error : ${error}`, 500, error);
    })
})

module.exports = router;