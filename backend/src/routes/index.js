const { Router } = require('express');
const Products = require('./products/Product');
const Category = require('./categories/Category');
const CargarDB = require('./products/CargarDB');
const Register = require('./user/register');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', Products);
router.use('/', Category);
router.use('/api', CargarDB);
router.use('/', Register);
module.exports = router;
