const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type : String , required : true},
    username : {type : String , unique : true},
    password : {type : String , min : 6 , max : 12}
}, {timestamps : true});

const userModel = mongoose.model('Person',userSchema);

module.exports = userModel ;