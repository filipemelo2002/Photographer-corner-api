const mongoose = require('mongoose')

const Admin = mongoose.Schema({
    name:String,
    user:String,
    email:String,
    pass:String,
})

module.exports = mongoose.model('Admin', Admin)