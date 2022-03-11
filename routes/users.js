const {Router} = require('express');
const { getUsers, getTucumanUsers, addUser, deleteUser } = require('../controllers/users');

const router = Router();

router.get('/', getUsers);

// router.get('/tucuman', getTucumanUsers);

router.post('/', addUser);

router.delete('/', deleteUser)


module.exports = router
