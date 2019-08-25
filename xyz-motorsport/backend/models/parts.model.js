const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
var partSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    price:{
        type:Number,
        required:true,
        index:true,
    },
    description:{
        type:String,
        required:false,
        index:true,
    },
    brand:{
        type:String,
        index:true
    },
    type:{
        type:String,
        required:true,
        index:true,
    },
   picid:{
       type:String,
       index: true
   }
});

//Export the model
module.exports = mongoose.model('Part', partSchema);