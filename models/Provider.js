const {Schema, model} = require ("mongoose");

const ProviderSchema = new Schema({
  name:{
    type:String
  }
})

module.exports = model ('Provider', ProviderSchema);