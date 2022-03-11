
const getProducts = (req,res)=>{
  res.status(200).json(products);
}

const getArgentineProducts = (req,res)=>{
  res.send('Todos los productos de argentina');
}

const addProduct = (req,res) =>{
  console.log(req.body);
  res.end()
}

module.exports = {getProducts, getArgentineProducts, addProduct}