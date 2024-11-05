const Model = require('./model');

function addUser( user ){

  const myUser = new Model(user);
  myUser.save();
}

async function getUsers( filterUserName ){

  let filter = {};
  
  if(filterUserName){

    filter = { ...filter , name : filterUserName }
  }

  const users = await Model.find( filter );
  
  return users;
}

module.exports = { 
  add : addUser , 
  list : getUsers
};