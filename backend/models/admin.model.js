const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
 email: {type: String, required: true},
 password :{ type: String, required: true ,minlength: 8}

}, {
  timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;