const store = require('./store');

function addChat( newChat ){

    return new Promise( (resolve,reject) => {

        if( !newChat ){

            console.error(`[messageController] newchat no existe`);

            reject('Invalid chat');
        }

        const chat = {
            users: newChat.users,
            messages: newChat.messages
        };
    
        store.addChat(chat);

        resolve(chat);
    });
}

function listChats( userId ){

    return new Promise(( resolve, reject ) => {

        //resolve(store.get()); //for just one element
        resolve(store.listChats( userId ));
    });

}

module.exports = {

    addChat : addChat,
    listChats : listChats
}