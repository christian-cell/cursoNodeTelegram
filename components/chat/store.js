const Model = require('./model');

function addChat( chat ) {

    const myChat = new Model(chat);

    myChat.save();
}

async function listChats(userId){

    let filter = {};

    console.log('llega hasta aqui')

    if (userId) {

        filter = { users: userId };
    } 

    try {

        const populated = await Model.find(filter)
        .populate({
            path: 'users', 
            select: 'name'  
        })
        .populate({
            path: 'messages',
            select: 'message date user', 
            populate: { 
                path: 'user', 
                select: 'name' 
            }
        })
        .exec();

        return populated;

    } catch (error) {
        
        throw error;
    }
}

module.exports = { 
    addChat : addChat , 
    listChats : listChats
};