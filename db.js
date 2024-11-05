const db = require('mongoose');

db.Promise = global.Promise;

async function connect( mongoURI ) {

    try {
    
        await db.connect(mongoURI, {
          authSource: 'admin',
          user: 'root',
          pass: 'example'
        });
    
        console.log('MongoDB connected...');
    
    } catch (err) {
    
        console.error(err.message);
        process.exit(1);
    } 
}

module.exports = connect;