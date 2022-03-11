const {model, Schema} = require('mongoose');
const UserSchema = new Schema({
  name:{
    type: String,
    trim:true,
    required:true,
    minlength:3,
    maxlength:15
  },
  lastname:{
    type:String,
  },
  email:{
    type:String,
    unique:true,
  },
  age:{
    type:Number,
    default:18
  },
  hobbies:{
    type:Array
  },
  car:{
    type:String,
    enum:['Reanult','Ford']
  }
},{
  versionKey:false,
  timestamps:true
})

module.exports = model('User',UserSchema);