const { Router } = require('express');
const Products = require('./products/Product');
const Category = require('./categories/Category');
const Brand = require('./brands/Brand');
const CargarDB = require('./products/CargarDB');
const Register = require('./user/register');
const Login = require('./user/login');
const Logout = require('./user/logout');
const LoadCartProduct = require('./user/LoadCart');
const email = require('./user/email');
const editProfile = require('./user/editProfile');
const removeFromStock = require('./Paypal/RemoveFromStock');
const VerifyStock = require('./Paypal/VerifyStock');
const review = require('./Comment/review');
const favorite = require('./user/addFavoritos');
const deleteFav = require('./user/deleteFavoritos');
const getFav = require('./user/getFavoritos');
//====ADMIN===
const EditUser = require('./admin/EditUser');
const VerifyPassword = require('./admin/VerifyPassword');
const Delete = require('./admin/DeleteProduct');
const Put = require('./admin/EditProduct');
const Create = require('./admin/CreateProduct');
const GetUsers = require('./admin/GetUsers');
const CreateAdminUser = require('./admin/CreateAdminUser');
const ResetPassword = require('./user/ResetPassword');
// FILTER
const filterProduct = require('./filter/filter');

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
router.use('/', email);
router.use('/', CreateAdminUser);
router.use('/', ResetPassword);
router.use('/', editProfile);
router.use('/', filterProduct);
router.use('/', removeFromStock);
router.use('/', VerifyPassword);
router.use('/', VerifyStock);
router.use('/', review);
router.use('/', favorite);
router.use('/', deleteFav);
router.use('/', getFav);
module.exports = router;
