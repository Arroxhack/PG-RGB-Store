const { Router } = require('express');
const { User, Product } = require('../../db');
const router = Router();

//SABER A QUE USER AGREGARLE Y QUE PRODUCTO
router.put('/add/favorito', async (req, res, next) => {
  const { idUser, idProd } = req.body;
  //Me traigo los datos por body
  try {
    //Busco el user y el producto para corroborar que existen
    const user = await User.findByPk(idUser);
    const producto = await Product.findByPk(idProd);

    //Corroboro que existen, si no aviso
    if (!user) {
      return res
        .status(404)
        .send({ error: 'doesnt exist an user with that id' });
    } else if (!producto) {
      return res
        .status(404)
        .send({ error: 'doesnt exist a product with that id' });
    }

    //Con added verifico que se haya agregado de favoritos
    //, como estado inicial no esta agregado entonces el false
    let added = false;
    //Me guardo el array de ids favoritos del user
    const userFavorites = user.favoritos;

    //console.log(userFavorites, ' soy user favoritos');
    //Si el array no incluye el producto, no lo tiene incluido entonces lo puedo agregar
    if (!userFavorites.includes(idProd)) {
      user.set({
        favoritos: [...userFavorites, idProd],
      });
      //cambio el added a true porque se agrego correctamente
      added = true;
      await user.save();
      console.log(user.favoritos);
    } else {
      //si el array lo incluye, mando un 300 que ya esta agregado
      return res.send({ error: 'already have added to favorites' });
    }
    //const newUserUniqueFavorites = userFavorites.filter((p) => p.id != idProd);

    added
      ? res.send({ success: 'Added!' })
      : res.status(404).send({ error: 'something go wrong :(' });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
