const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function( req, res ) {

    // const { body : { users } } = req || {};

    console.debug(req.body);

    controller.addChat( req.body ).then(( data ) => {

        response.success(req, res, data, 201);
    
    }).catch(( error ) => {

        response.error(req, res, 'Internal error',500,error)
    })
}) 

router.get('/' ,function(req,res){

    const { query : { userId } } = req || {};

    console.log(userId);

    controller.listChats( userId ).then(( users ) => {

        response.success(req, res, users, 200);
    
    }).catch((error) => {

        console.log(`Unexpected error : ${error}`);
        
        response.error(req, res, `Unexpected error : ${error}` , 500 , error);
    })
})

module.exports = router;