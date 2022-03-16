
exports.checkUser = (req,res,next) =>{
  if(Object.keys(req.body).length === 0){
    res.status(404).json({msj:'Tu peticion esta mal'})
  }else{
    next();
  }
}

// const objetito = {}

// Object.keys(objetito).length = 0



//MENSAJE HTTP
// METHOD: 
// HEAD:
// BODY: