const mongoose = require('mongoose');

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

module.exports = { 
  add : addMessage , 
  list : getMessages,
  connectDB :connectDB 
};

/* 
function addMessage( message ){

  list.push(message);
}

function getMessages(){

  return list;
} 
*/