const moongose = require('mongoose');
const Schema = moongose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type:String,
        trim: true,
        required: true
    },
    password:String,
    is_active: {
        type:Boolean,
        default: true
    }
    
});

const Users = moongose.model('User', userSchema);
module.exports = Users;
