const {Router} = require('express');
const { createProduct, getProducts, getProductById, deleteProduct, updateProduct } = require('../controllers/products');

const router = Router();

router.get('/', getProducts);

router.post('/', createProduct);

router.get('/:id', getProductById);

router.delete('/', deleteProduct);

router.put('/:id', updateProduct);

module.exports = router;