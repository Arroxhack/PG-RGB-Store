const { Router } = require("express");
const { User } = require("../../db");
const bcrypt = require("bcrypt");
const randomstring = require("randomstring");
const { transporter } = require("../../nodemailer/config");
const router = Router();

router.post("/resendEmailLogin", async (req, res) => {
  const { email } = req.body;
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
   return res.send("Codigo Reenviado");
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
   return res.send("Codigo Reenviado");
  } else {
   return  res.send("Error usuario no encontrado");
  }
});

router.post("/SendEmailProducts", async (req, res) => {
  const { username, products, precioTotal, idCompra } = req.body;
  const user = await User.findOne({ where: { username: username } });
  let StringToSend = "";

  for (n in products) {
    StringToSend +=
      `<li style="text-decoration: none;">` +
      `<h2 style="font-size: 25px; font-weight: 400; margin: 0;">` +
      products[n] +
      "</h2>" +
      "</li>";
  }
  if (user.id) {
    const response = await transporter.sendMail({
      from: "rgbstore0@gmail.com", // sender address
      to: user.email, // list of receivers
      subject: "Thank for your purchase  ✔", // Subject line
      text: "", // plain text body
      html: `
      <tr>
      <td bgcolor="#212121" align="center" style="padding: 0px 50px 0px 50px;">
          <table border="0" cellpadding="0" cellspacing="0" width="580" >
              <tr>
                  <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                    <h1 style="font-size: 32px; font-weight: 400; margin: 0;">Hi ${username} thank for purchase</h1>
                    <h2 style="font-size: 25px; font-weight: 400; margin: 0;"> <ul>${StringToSend},</ul>  </h2>
                    <h1 style="font-size: 25px; font-weight: 400; margin: 0;"><p>  TOTAL PRICE: $${precioTotal}</p></h1>
                    <p style="font-size: 20px; font-weight: 400; margin: 0;"> id purchase: ${idCompra}</p>
                  </td>
              </tr>
          </table>
      </td>
  </tr>

      <tr>
      <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
          <table border="0" cellpadding="0" cellspacing="0" width="580" >
            <!-- ADDRESS -->
            <tr>
              <td bgcolor="#f4f4f4" align="left" style="text-align: center; padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                <p style="margin: none;">Â© Copyright 2022 | PG Henry  |  Grupo 7</p>
              </td>
            </tr>
          </table>
      </td>
  </tr>`, // html body
    });
    res.send("Codigo Reenviado");
  } else {
    res.send("Error usuario no encontrado");
  }
});

module.exports = router;
