const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    users: [
        {
            type: Schema.ObjectId,
            ref: 'User'
        }
    ],
    messages: [
        {
            type: Schema.ObjectId,
            ref: 'Message'
        }
    ]
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;

