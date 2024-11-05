exports.success = function (req , res , message, status) {
    
    /* 
    *  en caso de que no venga un status envía un 200
    */

    res.status(status || 200).send({
        error : '',
        message : message
    });
}

exports.error = function (req , res, message, status , details) {
    
    console.error(`response error ${details}`);

    res.status(status || 500).send({

        error : message,
        body : ''
    })
}