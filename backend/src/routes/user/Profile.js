const { Router } = require('express');
const { User } = require('../../db');
const router = Router();
//======================================
//CAMBIAR PARAMS!!!!! PELIGROSO! PUEDO ACCEDER A PERFILES DE OTROS USER Y EDITARLOS!!!
//======================================
router.get('/profile/:username', async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ where: { username } });
    user?.name.length
      ? res.send(user)
      : res.status(404).send('Something go wrong :(');
  } catch (error) {
    next(error);
  }
});
module.exports = router;
