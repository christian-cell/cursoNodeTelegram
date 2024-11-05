const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/',function(req,res){

    /* console.log(JSON.stringify(req.headers));
    res.header({ "custom-header":"Nuestro valor personalizado" });
    response.success(req , res, 'lista de mensajes'); */

    controller.getMessages().then(( messageList ) => {

        response.success(req, res, messageList, 200);
    
    }).catch((error) => {

        console.log(`Unexpected error : ${error}`);
        
        response.error(req, res, `Unexpected error : ${error}` , 500 , e);
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

router.delete('/',function(req,res){
    
    res.send('mensaje eliminado');
})

module.exports = router;