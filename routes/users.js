const {Router} = require('express');
const { getUsers, getTucumanUsers, addUser, deleteUser, getUsersByName, getYoungUsers, getUserById, updateUser } = require('../controllers/users');
const { checkUser } = require('../middlewares/auth');

const router = Router();

router.get('/', getUsers);

router.get('/nombre', getUsersByName);

router.get('/jovenes', getYoungUsers);

router.get('/:id', getUserById);
// router.get('/tucuman', getTucumanUsers);

router.post('/',  checkUser, addUser);

router.delete('/', deleteUser);

router.put('/:id', updateUser);


module.exports = router
