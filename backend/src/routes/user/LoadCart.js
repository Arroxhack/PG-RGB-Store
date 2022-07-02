const { Router } = require('express');
const { User } = require('../../db');
const router = Router();

//Cargar carrito en la bd
router.put('/userCart/', async (req, res, next) => {
  const { cartProductArray,email } = req.body;
  try {
    //caso carrito vacio
    //caso carrito con cosas

    if (!cartProductArray.length) {
      return res.send('cart is empty');
    }

    if (cartProductArray.length > 0) {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.send('User doesnt exist');
      }

      user.set({
        cartProducts: cartasd,
      });

      await user.save();
    }
    res.send('done');
  } catch (e) {
    res.status(404).send('error updating user cart');
  }
});

//Recuperar carrito de la bd
router.get('/userCart/:email', async (req, res, next) => {
  const { email } = req.params;

  //traerme los datos
  const user = await User.findOne({ where: { email } });

  //ver si el user existe
  if (!user) {
    return res.send('User doesnt exist');
  }

  //guardar el carrito
  const userCart = user.cartProducts;

  //devolver el carrito
  res.send(userCart);
});

module.exports = router;
