const store = require('./store');

function addMessage( user, message ){

    return new Promise( (resolve,reject) => {
       
        if( !user || !message ){

            console.error(`[messageController] no hay usuario o mensaje , user: ${user} , message: ${message}`);

            reject('los datos son incorrectos');

            return false;
        }

        const fullMessage = {
            user : user,
            message : message,
            date: new Date()
        }

        store.add(fullMessage);
    
        resolve(fullMessage);
    });
}

function getMessages(){

    return new Promise(( resolve, reject ) => {

        //resolve(store.get()); //for just one element
        resolve(store.list());
    });
}

module.exports = { addMessage , getMessages };