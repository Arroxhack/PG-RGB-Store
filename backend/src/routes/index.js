<<<<<<< HEAD
const { Router } = require('express');
const products = require('./Product');
const category = require('./Category');
=======
const { Router } = require("express");
const Products = require("./Product");
const Category = require("./Category");
const CargarDB = require("./CargarDB");
>>>>>>> d7cc50c519687a812801247ece4f08be2c8444b1
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
<<<<<<< HEAD
router.use('/', products);
router.use('/', category);

=======
router.use("/", Products);
router.use("/", Category);
router.use("/api", CargarDB);
>>>>>>> d7cc50c519687a812801247ece4f08be2c8444b1
module.exports = router;
