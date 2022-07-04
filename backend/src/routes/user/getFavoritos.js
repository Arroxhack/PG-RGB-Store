const { Router } = require('express');
const { User, Product } = require('../../db');
const router = Router();

//SABER A QUE USER AGREGARLE Y QUE PRODUCTO
router.get('/get/favorito', async (req, res, next) => {
  const { idUser } = req.query;
  //Me traigo los datos por body
  try {
    //Busco el user y el producto para corroborar que existen
    const user = await User.findByPk(idUser);
    // console.log(idUser);
    //Corroboro que existen, si no aviso
    if (!user) {
      return res.status(404).send('doesnt exist an user with that id');
    }

    //en la bd me guardo los id nomas
    const userFavoriteIds = user.favoritos;

    //me traigo todos los productos y los devuelvo.
    const fav = userFavoriteIds.map(async (id) => await Product.findByPk(id));
    const favorites = await Promise.all(fav);
    //console.log('favoritos en getFavoritos: ', favorites);
    res.send(favorites);
    // added
    //   ? res.send('Added succefully')
    //   : res.status(404).send({ error: 'something go wrong :(' });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
