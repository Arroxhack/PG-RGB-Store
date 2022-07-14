const { Router } = require("express");
const { User } = require("../../db");
const bcrypt = require("bcrypt");
const randomstring = require("randomstring");
const { transporter } = require("../../nodemailer/config");
const router = Router();
// ---------CHANGE PASSWORD---------- //
router.put("/sendTokenReset", async (req, res) => {
  try {
    const { password, username } = req.body;
    const usuario = await User.findOne({ where: { username: username } });
    const passwordOfUser = await bcrypt.compare(password, usuario.password);
    if (passwordOfUser == false) {
      res.send("Error, invalid Password");
    } else {
      const token = randomstring.generate(7);
      const update = await User.update(
        { tokenResetPassword: token },
        {
          where: {
            username: username,
          },
        }
      );
      if (update[0] == 1) {
        await transporter.sendMail({
          from: "rgbstore0@gmail.com", // sender address
          to: usuario.email, // list of receivers
          subject: "✔Reset Password✔", // Subject line
          text: "", // plain text body
          html: `<b>Use this token to reset your password:</b> <p>${token}</p>`, // html body
        });
        res.send("A verification token was sent to your email to reset your password");
      } else {
        res.send("Token reset Updated Error");
      }
    }
  } catch (e) {
    console.log(e)
  }
});

router.put("/resetPassword", async (req, res) => {
  try {
    const { token, NewPassword, username } = req.body;
    const securityLevels = 8;
    if (token && NewPassword && username) {
      const usuario = await User.findOne({ where: { username: username } });
      const passwordBefore = await bcrypt.compare(
        NewPassword,
        usuario.password
      );
      if (passwordBefore === true) {
        res.send("Error, you can not use the same password");
      }
      if (usuario?.tokenResetPassword === token) {
        const passHashed = await bcrypt.hash(NewPassword, securityLevels);
        const update = await User.update(
          { password: passHashed },
          { where: { username: username } }
        );
        const update2 = await User.update(
          { tokenResetPassword: null },
          { where: { username: username } }
        );
        console.log("update1", update, "update2", update2);
        if (update[0] === 1 && update2[0] === 1) {
          res.send("Your password has been successfully changed");
        } else {
          res.send("Error while changing the password");
        }
      }
    } else {
      res.send("Missing data"); // faltan enviar datos
    }
  } catch (e) {
    console.log(e)
  }
});
// ------------ FORGOT PASSWORD ------------------ //

router.post("/sendTokenResetPassword", async (req, res) => {
  try {
    const { email } = req.body;
    const usuario = await User.findOne({ where: { email: email } });
    if (!usuario?.email) {
      return res.send("Error, invalid Email");
    } else if (usuario?.email !== email) {
      return res.send("Error, invalid Email");
    } else {
      const token = randomstring.generate(7);
      const update = await User.update(
        { tokenResetPassword: token },
        {
          where: {
            email: email,
          },
        }
      );
      if (update[0] == 1) {
        await transporter.sendMail({
          from: "rgbstore0@gmail.com", // sender address
          to: usuario.email, // list of receivers
          subject: "Forgot Password✔", // Subject line
          text: "", // plain text body
          html: `<h2>Hi! ${usuario.username}<h2/> <b>Here is the token to change your Password:</b> <p>${token}</p>`, // html body
        });
        return res.send("Token send---Check your email");
      } else {
        return res.send("Token reset Updated Error");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

router.put("/resetForgotPassword", async (req, res) => {
  try {
    const { token, NewPassword, email } = req.body;
    // console.log(token, NewPassword, email);
    const securityLevels = 8;
    if (token && NewPassword && email) {
      const usuario = await User.findOne({ where: { email: email } });
      const passwordBefore = await bcrypt.compare(
        NewPassword,
        usuario.password
      );
      if (passwordBefore === true) {
        return res.send("Error, you can not use the same password");
      }
      if (usuario?.tokenResetPassword === token) {
        const passHashed = await bcrypt.hash(NewPassword, securityLevels);
        const update = await User.update(
          { password: passHashed },
          { where: { email: email } }
        );
        const update2 = await User.update(
          { tokenResetPassword: null },
          { where: { email: email } }
        );
        if (update[0] === 1 && update2[0] === 1) {
          return res.send("Your password has been successfully changed");
        } else {
          return res.send("Error while changing the password");
        }
      }
    } else {
      return res.send("Missing data"); // faltan enviar datos
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
