const Product = require('./../models/Product');

exports.createProduct = async (req,res) =>{
  try {
    const productInfo = req.body;
    const newProduct = new Product(productInfo);
    await newProduct.save();
    res.status(200).json({mensaje:'Producto creado correctamente'})
  } catch (error) {
    console.log(error);
    res.status(404).json({mensaje:'Hubo un error al cargar el producto'})
  }
}

exports.getProducts = async (req,res) =>{
  try {
    const products = await Product.find();
    res.status(200).json(products)
  } catch (error) {
    console.log(error);
    res.status(400).json({mensaje:'Error en la petición'})
  }
}

exports.getProductById = async (req,res) =>{
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product)
  } catch (error) {
    console.log(error);
    res.status(400).json({mensaje:'Error en la petición'})
  }
}

//! Mezcla de getProducts y getProductById
// exports.getProducts = async (req,res) =>{
//   try {
//     const id = req.query.id;
//     if(id){
//       const product = await Product.findById(id);
//       res.status(200).json(product)
//     }
//     const products = await Product.find();
//     res.status(200).json(products)
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({mensaje:'Error en la petición'})
//   }
// }

exports.deleteProduct = async (req,res) =>{
  try {
    const id = req.query.id;
    const productoBorrado = await Product.findByIdAndDelete(id);
    if(!productoBorrado){
      return res.status(404).json({mensaje:'El producto no existe'})
    }
    res.status(200).json({mensaje:'El producto fue borrado correctamente'})
  } catch (error) {
    console.log(error);
    res.status(400).json({mensaje:'Error en la petición'})
  }
}

exports.updateProduct = async (req,res) =>{
  try {
    const id = req.params.id;
    const productoActualizado = await Product.findByIdAndUpdate(id, req.body, {runValidators:true});
    if(!productoActualizado){
      return res.status(404).json({mensaje:'El producto no existe'})
    }
    res.status(200).json({mensaje: 'El producto fue actualizado correctamente'})
  } catch (error) {
    console.log(error);
    res.status(400).json({mensaje:'Error en la petición'})
  }
}