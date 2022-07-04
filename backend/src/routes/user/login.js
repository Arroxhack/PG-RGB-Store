const { Router } = require("express");
const express = require("express");
var passport = require("passport");
var Strategy = require("passport-local").Strategy;
const routeRegister = require("./register");
const router = Router();
const { transporter } = require("../../nodemailer/config");
const { User } = require("../../db");

router.post(
  "/login", // recibe username y password
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
    failureFlash: true,
  }),
  async (req, res) => {
    let AccountLock = await User.findOne({
      where: { username: req.user.username },
    });
    if (AccountLock?.lock) {
      return res.redirect("/lockedaccount");
    }
    let {
      name,
      lastname,
      image,
      username,
      email,
      cellphone,
      permissions,
      verify,
      id,
    } = req.user;
    // User autenticado, en req.user esta toda la data del usuario guardada en la base de datos.
    return res.json({
      login: true,
      lastname,
      image,
      username,
      email,
      cellphone,
      name,
      permissions,
      verify,
      id,
    });
  }
);

router.get("/googleLogin", async (req, res) => {
  let { googleMail } = req.query;
  try {
    if (googleMail) {
      let googleUser = await User.findOne({
        where: { email: googleMail },
      });
      console.log("googleUser: " ,googleUser);
      return res.json(googleUser);
    }
    return res.json("nada");
  } catch (error) {
    next(error);
  }
});

router.get("/lockedaccount", (req, res) => {
  res.send("Su email ha sido bloquedo por el administrador del sitio");
});

router.get("/login", (req, res) => {
  res.send(`${req.flash("error")[0]}`);
});



// Middleware para mostrar la sesión actual en cada request
router.use((req, res, next) => {
  // console.log(req.session, ' esto es req.session 120');
  // console.log(req.user, ' esto es req.user 121');
  next();
});

module.exports = router;
