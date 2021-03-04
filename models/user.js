const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now},
    roles: [{type: mongoose.Schema.Types.ObjectId, ref: "Role"}]
})

module.exports = mongoose.model('User',userSchema)