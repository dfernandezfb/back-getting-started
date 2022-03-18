const {model, Schema} = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
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
  password:{
    type:String,
    required:true
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
  },
  likedBeer:{
    type: [Schema.Types.ObjectId],
    ref:'Product',
  },
  hatedBeer:{
    type: Schema.Types.ObjectId,
    ref:'Product',
  }
},{
  versionKey:false,
  timestamps:true
})

UserSchema.plugin(uniqueValidator,{
  message:'{PATH} debe ser unico'
})

module.exports = model('User',UserSchema);