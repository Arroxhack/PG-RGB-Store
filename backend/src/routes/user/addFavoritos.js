const { Router } = require('express');
const { User, Product } = require('../../db');
const router = Router();

//SABER A QUE USER AGREGARLE Y QUE PRODUCTO
router.put('/favorito', async (req, res, next) => {
  const { idUser, idProd } = req.body;
  try {
    const user = await User.findByPk(idUser);
    const producto = await Product.findByPk(idProd);

    if (!user) {
      return res.status(404).send('Error: doesnt exist user with that id');
    } else if (!producto) {
      return res.status(404).send('Error: doesnt exist products with that id');
    }
    let added = false;
    const userFavorites = user.favoritos;

    if (!userFavorites.includes(idProd)) {
      user.set({
        favoritos: [...userFavorites, idProd],
      });
      added = true;
      await user.save();
    } else {
      return res.status(300).send('Error: already added to favorites');
    }
    //const newUserUniqueFavorites = userFavorites.filter((p) => p.id != idProd);

    added
      ? res.send('Added succefully')
      : res.status(404).send('Error: Something go wrong :(');
  } catch (error) {
    next(error);
  }
});
module.exports = router;
