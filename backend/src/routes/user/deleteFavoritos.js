const { Router } = require('express');
const { User, Product } = require('../../db');
const router = Router();

//SABER A QUE USER AGREGARLE Y QUE PRODUCTO
router.put('/delete/favorito', async (req, res, next) => {
  const { idUser, idProd } = req.body;
  //Me traigo los datos por body
  try {
    //Busco el user y el producto para corroborar que existen
    const user = await User.findByPk(idUser);
    const producto = await Product.findByPk(idProd);

    //Corroboro que existen, si no aviso
    if (!user) {
      return res.status(404).send('doesnt exist an user with that id');
    } else if (!producto) {
      return res.status(404).send('doesnt exist a product with that id');
    }

    //Con deleted verifico que se haya borrado de favoritos
    //, como estado inicial no esta borrado entonces el false
    let deleted = false;
    //Me guardo el array de ids favoritos del user
    const userFavorites = user.favoritos;

    //Si el array no incluye el producto, no lo tiene incluido entonces no lo puedo borrar
    if (!userFavorites.includes(idProd)) {
      return res.send('doesnt have added to favorites');
    } else {
      //Si el array incluye el producto, filtro y me quedo con todos los p (id) diferente al idProd
      console.log('userFavorites: ', userFavorites);
      const newFavorites = userFavorites.filter((p) => p != idProd);
      console.log('newFavorites: ', newFavorites);
      user.set({
        favoritos: [...newFavorites],
      });
      deleted = true;
      await user.save();
    }
    //const newUserUniqueFavorites = userFavorites.filter((p) => p.id != idProd);

    //Ahora segun deleted, devuelvo.
    deleted
      ? res.send('deleted succefully')
      : res.status(404).send('something go wrong :(');
  } catch (error) {
    next(error);
  }
});
module.exports = router;
