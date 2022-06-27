const { Router } = require("express");
const { User } = require("../../db");
const router = Router();

router.get("/Users", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    allUsers?.length
      ? res.send(allUsers)
      : res.status(404).send("Something go wrong :(");
  } catch (error) {
    next(error);
  }
});
router.get("/Users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const OneUsers = await User.findOne({ where: { id: id } });
    const { name, lastname, username, email, image, cellphone, address } =
      OneUsers;
    const usuario = {
      name: name,
      lastname: lastname,
      username: username,
      email: email,
      image: image,
      cellphone: cellphone,
      address: address,
    };
    usuario?.username
      ? res.send(usuario)
      : res.status(404).send("Error: no se encontro el usuario");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
