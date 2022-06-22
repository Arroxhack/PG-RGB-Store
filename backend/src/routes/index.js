const { Router } = require("express");
const Products = require("./products/Product");
const Category = require("./categories/Category");
const CargarDB = require("./products/CargarDB");
const Register = require("./user/register");
const Login = require("./user/login");
const Logout = require("./user/logout");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", Products);
router.use("/", Category);
router.use("/api", CargarDB);
router.use("/", Register);
router.use("/", Login);
router.use("/", Logout);
module.exports = router;
