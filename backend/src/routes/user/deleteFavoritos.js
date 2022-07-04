const { Router } = require('express');
const { User, Product } = require('../../db');
const router = Router();

//SABER A QUE USER AGREGARLE Y QUE PRODUCTO
router.put('/delete/favorito', async (req, res, next) => {
  const { idUser, idProd } = req.body;
  try {
    const user = await User.findByPk(idUser);
    const producto = await Product.findByPk(idProd);

    if (!user) {
      return res.status(404).send('Error: doesnt exist user with that id');
    } else if (!producto) {
      return res.status(404).send('Error: doesnt exist products with that id');
    }
    let deleted = false;
    const userFavorites = user.favoritos;

    if (!userFavorites.includes(idProd)) {
      return res.status(300).send('Error: doesnt have added to favorites');
    } else {
      const newFavorites = userFavorites.filter((p) => p != idProd);
      user.set({
        favoritos: [...newFavorites],
      });
      deleted = true;
      await user.save();
    }
    //const newUserUniqueFavorites = userFavorites.filter((p) => p.id != idProd);

    deleted
      ? res.send('Deleted succefully')
      : res.status(404).send('Error: Something go wrong :(');
  } catch (error) {
    next(error);
  }
});
module.exports = router;
