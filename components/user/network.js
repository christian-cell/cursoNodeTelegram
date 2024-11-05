const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/',function(req,res){

    const { query : { name } } = req || {};

    const filterUserName = name || null;

    controller.getUsers( filterUserName ).then(( userList ) => {

        response.success(req, res, userList, 200);
    
    }).catch((error) => {

        console.log(`Unexpected error : ${error}`);
        
        response.error(req, res, `Unexpected error : ${error}` , 500 , error);
    })
})

router.post('/', function(req, res){

    const { body : { name } } = req || {};

    controller.addUser( name ).then(( data ) => {

        response.success(req, res, data, 201);
    
    }).catch(( error ) => {

        response.error(req, res, `Error interno , error : ${error}`, 500, error);
    });
})

module.exports = router;