const { Router } = require("express");
const { User, Admin } = require("../../db");
const router = Router();
const bcrypt = require("bcrypt");

router.post("/verifyAdminPass", async (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    if (username === undefined || password === undefined) {
      res.send("Error Faltan Datos");
    }
    const user = await User.findOne({ where: { username: username } });
    if (!user.password) {
      res.send("Error no se encontro el usuario");
    }
    const contraseña = await bcrypt.compare(password, user.password);
    if (contraseña === true) {
      res.send("Verify");
    } else {
      res.send("Error");
    }
  } catch (error) {
    next(error)
  }
});

module.exports = router;
