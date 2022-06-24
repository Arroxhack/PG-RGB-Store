const { Router } = require("express");
const express = require("express");
var passport = require("passport");
var Strategy = require("passport-local").Strategy;
const routeRegister = require("./register");
const router = Router();
const { User } = require("../../db");

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  async (req, res) => {
    console.log(req.user, " esto es req.user autenticado");
    let AccountLock = await User.findOne({
      where: { username: req.user.username },
    });
    console.log("AccountLock:", AccountLock);
    if (AccountLock?.lock) {
      return res.redirect("/lockedaccount");
    }
    let { name, lastname, image, username, email, cellphone } = req.user;
      res.json({
    login: true,
    lastname,
    image,
    username,
    email,
    cellphone,
    name,
  });
  }
);


router.get("/lockedaccount", (req, res) => {
  res.send("Su email ha sido bloquedo por el administrador del sitio");
});

router.get("/login", (req, res) => {
  res.send("Email o contraseña incorrecta");
});

// Middleware para mostrar la sesión actual en cada request
router.use((req, res, next) => {
  // console.log(req.session, ' esto es req.session 120');
  // console.log(req.user, ' esto es req.user 121');
  next();
});

module.exports = router;
