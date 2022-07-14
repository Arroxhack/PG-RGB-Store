const { Router } = require("express");
const { User } = require("../../db");
const router = Router();
const bcrypt = require("bcrypt")

router.get("/Users", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    allUsers?.length
      ? res.send(allUsers)
      : res.status(404).send("Something went wrong :("); //????????????
  } catch (error) {
    next(error);
  }
});
router.get("/Users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const OneUsers = await User.findOne({ where: { id: id } });
    const {
      name,
      lastname,
      username,
      email,
      image,
      cellphone,
      address,
      points,
    } = OneUsers;
    const usuario = {
      name: name,
      lastname: lastname,
      username: username,
      email: email,
      image: image,
      cellphone: cellphone,
      address: address,
      points: points,
    };
    usuario?.username
      ? res.send(usuario)
      : res.status(404).send("Error: User not found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
