const { Router } = require("express");
const express = require("express");
var passport = require("passport");
var Strategy = require("passport-local").Strategy;
const routeRegister = require("./register");
const router = Router();
const { User } = require("../../db");

// Esta ruta sirve para desloguear un usuario
// Cuando el usuario se deslogua, se limpian los datos de su sesión, y es
// por ahora redirigido a / dónde recibirá un mensaje como respuesta.
router.post("/logout", function (req, res) {
  req.session.destroy(function (err) {
    res.send("logoutSuccesfully"); //Inside a callback… bulletproof!
  });
});

// router.post("/logout", function (req, res) {
//   req.logout();
//   res.redirect("/");
// });

module.exports = router;
