const User = require('./../models/User');
const bcrypt = require('bcrypt');

exports.getUsers =async (req,res)=>{
  try {
    const users = await User.find().populate({
      path:'hatedBeer',
      select:'-_id',
      populate:'provider'
    }).populate('likedBeer','-_id');
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
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(req.body.password,salt);
    const newUser = new User({
      ...req.body,
      password:encryptedPassword
    });
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

exports.login = async (req,res) =>{
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email:email});
    if(!user){
      return res.status(404).json({mensaje:'El usuario no existe'});
    }
    const result = await bcrypt.compare(password, user.password);
    res.status(200).json({resultadoEncriptacion: result})
  } catch (error) {
    console.log(error);
  }
}