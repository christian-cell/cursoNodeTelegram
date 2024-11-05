const store = require('./store');

function addUser( name ){

    return new Promise( (resolve,reject) => {
       
        if( !name ){

            console.error(`[messageController] no hay usuario con el nombre : ${name} , message: ${message}`);

            reject('los datos son incorrectos');

            return false;
        }

        const fullUser = {

            name : name,
            date: new Date()
        }

        store.add(fullUser);
    
        resolve(fullUser);
    });
}

function getUsers( filterUserName ){

    console.log(filterUserName);

    return new Promise(( resolve, reject ) => {

        //resolve(store.get()); //for just one element
        resolve(store.list( filterUserName ));
    });
}

module.exports = {
    addUser : addUser,
    getUsers : getUsers
}