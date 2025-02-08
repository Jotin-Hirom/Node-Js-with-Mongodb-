//1. Define schema -> Note = id, userid, title, content, dateadded
//2. Create Model -> <Model name> <schema> Note
const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    id: {
        type: String, 
        unique: true,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    }, 
    dateAdded: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Note",noteSchema);