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