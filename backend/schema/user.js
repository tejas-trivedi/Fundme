var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
name: {
    type: String,
    required: 'Kindly Enter the name'
    
},
amount: {
    type: Number
},
hospitalName:
{
    type: String
},
hospitalAddress:
{
    type: String
},
contact:
{
    type: Number

},
})
module.exports = mongoose.model('user', userSchema);