const { Router } = require('express');
const Products = require('./products/Product');
const Category = require('./categories/Category');
const Brand = require('./brands/Brand');
const CargarDB = require('./products/CargarDB');
const Register = require('./user/register');
const Login = require('./user/login');
const Logout = require('./user/logout');
const LoadCartProduct = require('./user/LoadCart');
//===USER STUFF===
const Profile = require('./user/Profile');
const editProfileUser = require('./user/editProfile');
//====ADMIN===
const Delete = require('./admin/DeleteProduct');
const Put = require('./admin/EditProduct');
const Create = require('./admin/CreateProduct');
const GetUsers = require('./admin/GetUsers');
const EditUser = require('./admin/EditUser');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', Products);
router.use('/', Category);
router.use('/api', CargarDB);
router.use('/', Register);
router.use('/', Delete);
router.use('/', Put);
router.use('/', Login);
router.use('/', Logout);
router.use('/', Create);
router.use('/', GetUsers);
router.use('/', Brand);
router.use('/', EditUser);
router.use('/', LoadCartProduct);
//user
router.use('/', Profile);
router.use('/', editProfileUser);
module.exports = router;
