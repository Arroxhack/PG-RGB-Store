const { Router } = require('express');
const products = require("./Product")
const category = require("./Category")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/",products)
router.use("/",category)

module.exports = router;
