
exports.checkUser = (req,res,next) =>{
  if(req.body !== null){
    res.status(404).json({msj:'Tu peticion esta mal'})
  }else{
    next();
  }
}


//MENSAJE HTTP
// METHOD: 
// HEAD:
// BODY: