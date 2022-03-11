const {Router} = require('express');
const { getProducts, getArgentineProducts, addProduct } = require('../controllers/products');
const router = Router();

router.get('/', getProducts);

router.post('/',  addProduct)

router.get('/argentina', getArgentineProducts);

module.exports = router;