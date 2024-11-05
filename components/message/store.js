const Model = require('./model');
const Chat = require('../chat/model');

function addMessage( message ){

  const myMessage = new Model(message);
  
  myMessage.save().then(( savedMessage ) => {

    return Chat.findByIdAndUpdate(

      message.chat,               
      { $push: { messages: savedMessage._id } }  

    ).then(() => savedMessage);
  })
}

async function getMessages(filterUserName) {
  
  let filter = {};

  if (filterUserName) {

    filter = { ...filter, user: filterUserName };
  }

  try {

    const populated = await Model.find(filter).populate('user').exec();
    
    return populated;

  } catch (error) {
    
    throw error;
  }
}


async function updateText(id, message){

  const foundMessage = await Model.findOne({
    
    _id: id
  });

  foundMessage.message = message;

  const newMessage = await foundMessage.save();

  return newMessage;
}

function removeMessage( id ){

  return Model.deleteOne({

    _id : id
  })
}

module.exports = { 
  add : addMessage , 
  list : getMessages,
  updateText : updateText,
  removeMessage: removeMessage
};