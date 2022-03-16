const {Router} = require('express');
const { createProduct, getProducts } = require('../controllers/products');

const router = Router();

router.get('/', getProducts);

router.post('/', createProduct);

// router.delete('/',);

// router.put('/',);

module.exports = router;