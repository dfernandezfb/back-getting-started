const {Router} = require('express');
const { getUsers, getTucumanUsers } = require('../controllers/users');

const router = Router();

router.get('/', getUsers);

router.get('/tucuman', getTucumanUsers);


module.exports = router
