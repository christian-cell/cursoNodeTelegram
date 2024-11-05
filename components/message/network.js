const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/',function(req,res){

    /* console.log(JSON.stringify(req.headers));
    res.header({ "custom-header":"Nuestro valor personalizado" });
    response.success(req , res, 'lista de mensajes'); */

    const { query : { user } } = req || {};

    const filterMessages = user || null;

    controller.getMessages( filterMessages ).then(( messageList ) => {

        response.success(req, res, messageList, 200);
    
    }).catch((error) => {

        console.log(`Unexpected error : ${error}`);
        
        response.error(req, res, `Unexpected error : ${error}` , 500 , error);
    })
})

router.post('/',function(req,res){

    // const { body : {user , message} } = req || {};

    controller.addMessage(req.body.user , req.body.message).then( ( fullMessage ) => {

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