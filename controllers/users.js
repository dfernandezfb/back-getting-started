const User = require('./../models/User');

exports.getUsers =async (req,res)=>{
  const users = await User.find();
  res.status(200).json(users)
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

exports.deleteUser = (req,res) =>{
  const id= req.body.id
  console.log(id);
  res.status(200).json({msg:'El usuario fue borrado correctamente'});
}