const { execMap } = require('nodemon/lib/config/defaults');
const User = require('./../models/User');

exports.getUsers =async (req,res)=>{
  try {
    const users = await User.find();
    res.status(200).json(users)
  } catch (error) {
    console.log(error);
  }
}

exports.getUserById = async (req, res) =>{
  try {
    const idPorBody = req.body.id;
    const idPorQuery = req.query.id;
    const idPorParams = req.params.id;
    const userXEmail = await User.findOne({email:req.body.email})
    const user = await User.findById(idPorParams);
    res.status(200).json({xId:user,xEmail:userXEmail})
  } catch (error) {
    console.log(error);
  }
}

// req.body = {
//   name:'Marcos'
// }
//! LAS QUERIES DEBEN ESTAR EN UN OBJETO
exports.getUsersByName = async (req, res) =>{
  try {
    const name = req.body.name;
    const users = await User.find({name:name});
    res.status(200).json(users)
  } catch (error) {
    console.log(error);    
  }
}
//LT --> MENOR A 
//LTE --> MENOR O IGUAL A 
//GT --> MAYOR A
//GTE --> MAYOR O IGUAL A
exports.getYoungUsers = async(req,res)=>{
  try {
    const users= await User.find({age:{$lte:40}},'-_id name age')

    res.status(200).json(users)
  } catch (error) {
    console.log(error);
  }
}

exports.addUser = async (req,res)=>{
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({msg:'El usuario fue creado correctamente'})
  } catch (error) {
    console.log(error);
    res.status(400).json({msg:'Error en la solicitud'})
  }
}

exports.deleteUser = async (req,res) =>{
  try {
    const id= req.body.id
    await User.findOneAndDelete({email:req.body.email});
    res.status(200).json({msg:'El usuario fue borrado correctamente'});
  } catch (error) {
    console.log(error);
  }
}

exports.updateUser = async (req,res) =>{
  try {
    const id= req.params.id;
    await User.findByIdAndUpdate(id,{name:'Camila'});
    res.status(200).json({msg:'El usuario fue actualizado correctamente'});
  } catch (error) {
    console.log(error);
  }
}