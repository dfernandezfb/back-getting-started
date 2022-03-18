const {model, Schema} = require('mongoose');

const ProductSchema = new Schema({
  name:{
    type: String,
    required:true,
    trim:true
  },
  price:{
    type:Number,
    required:true,
    min:0
  },
  image:{
    type:String,
    required:true,
    trim:true
  },
  provider:{
    type:Schema.Types.ObjectId,
    ref:'Provider',
    required:true
  }
},{
  versionKey:false,
  timestamps:true
})

module.exports = model('Product',ProductSchema);