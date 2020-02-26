const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: true,
  },
  last_name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: String,
  is_active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Users', userSchema);
