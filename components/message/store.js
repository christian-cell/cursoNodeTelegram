const mongoose = require('mongoose');
const Model = require('./model');

const mongoURI = 'mongodb://root:example@localhost:27017/telegram';

const connectDB = async () => {
  try {

    await mongoose.connect(mongoURI, {
      authSource: 'admin',
      user: 'root',
      pass: 'example'
    });

    console.log('MongoDB connected...');

  } catch (err) {
    
    console.error(err.message);
    process.exit(1);
  }
};

function addMessage( message ){

  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages( filterUser ){

  let filter = {};
  
  if(filterUser){

    filter = { ...filter , user : filterUser }
  }

  const messages = await Model.find( filter );
  return messages;
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
  connectDB :connectDB ,
  removeMessage: removeMessage
};