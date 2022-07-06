const { Router } = require("express");
const { User } = require("../../db");
const bcrypt = require("bcrypt");
const randomstring = require("randomstring");
const { transporter } = require("../../nodemailer/config");
const router = Router();

router.post("/resendEmailLogin", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const user = await User.findOne({ where: { email: email } });
  if (user?.lock) {
    return res.send("Error Account blocked");
  } else {
    await transporter.sendMail({
      from: "rgbstore0@gmail.com", // sender address
      to: user.email, // list of receivers
      subject: "Verificacìon ✔", // Subject line
      text: "", // plain text body
      html: `<b>ENVIAMOS DE NUEVO TU CODIGO DE VERIFICACION:</b> <h1>${user.secretToken}</h1>`, // html body
    });
    res.send("Codigo Reenviado");
  }
});

router.post("/resendEmail", async (req, res) => {
  const { username } = req.body;
  const user = await User.findOne({ where: { username: username } });
  if (user.id) {
    const response = await transporter.sendMail({
      from: "rgbstore0@gmail.com", // sender address
      to: user.email, // list of receivers
      subject: "Verificacìon ✔", // Subject line
      text: "", // plain text body
      html: `<b>ENVIAMOS DE NUEVO TU CODIGO DE VERIFICACION:</b> <h1>${user.secretToken}</h1>`, // html body
    });
    res.send("Codigo Reenviado");
  } else {
    res.send("Error usuario no encontrado");
  }
});

router.post("/SendEmailProducts", async (req, res) => {
  const { username, products, precioTotal, idCompra } = req.body;
  const user = await User.findOne({ where: { username: username } });
  let StringToSend = "";

  for (n in products) {
    StringToSend +=
      "<li>" + "<h2>" + "<p>" + products[n] + "</p>" + "</h2>" + "</li>";
  }
  if (user.id) {
    const response = await transporter.sendMail({
      from: "rgbstore0@gmail.com", // sender address
      to: user.email, // list of receivers
      subject: "Thank for your purchase  ✔", // Subject line
      text: "", // plain text body
      html: `<h2>Hi ${username} thank for purchase</h2>
      <h2>Your order confirmation is below</h2>
          <ul>${StringToSend},</ul> <h1><p>  TOTAL PRICE: $${precioTotal}</p></h1> <p> id purchase: ${idCompra}</p>`, // html body
    });
    res.send("Codigo Reenviado");
  } else {
    res.send("Error usuario no encontrado");
  }
});

module.exports = router;
