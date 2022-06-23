const { Router } = require('express');
const { User } = require('../../db');
const router = Router();

router.put('/Users/:id', async (req, res, next) => {
  const { id } = req.params;
  const user = User.findOne({ where: { id } });

  const {
    name,
    lastname,
    username,
    email,
    password,
    cellphone,
    address,
    points,
    image,
    lock,
  } = req.body;

  const arr = [
    name,
    lastname,
    username,
    email,
    password,
    cellphone,
    address,
    points,
    image,
    lock,
  ];

  const aux = arr.filter((e) => e);
  //   const finalUser = aux.reduce((target, key, index) => {
  //     target[index] = key;
  //     return target;
  //   });
  const finalUser = { ...aux };
  const isUpdated = user.update(finalUser);

  //Update nos devuelve un array de length 1 con un 1 si fue todo bien y con 0 si salio mal
  isUpdated[0] === 1
    ? res.send('Correctly edit')
    : res.status(404).send('Failed on edit');
});

module.exports = router;
