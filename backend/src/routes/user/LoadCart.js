const { Router } = require('express');
const { User } = require('../../db');
const router = Router();

router.put('/userCart/:email', async (req, res, next) => {
  const { cartProductArray } = req.body;
  const { email } = req.params;
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

module.exports = router;
