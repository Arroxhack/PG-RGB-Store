const { Router } = require('express');
const { Product } = require('../../db');
const router = Router();

router.put('/remove', async (req, res, next) => {
  const { products } = req.body;
  //[{id,amount},{id,amount}]
  try {
    products.forEach(async (el) => {
      //busco el prod
      const product = await Product.findByPk(Number(el.id));

      //si existe p, lo updateo
      const stock = product.stock - Number(el.amount);

      if (stock < 0) {
        return res.send('Warning negative stock');
      }

      //Update nos devuelve un array de length 1 con un 1 si fue todo bien y con 0 si salio mal

      if (product) {
        const updated = await Product.update(
          { stock },
          { where: { id: Number(el.id) } }
        );

        updated[0] !== 0
          ? res.send('Correctly edit')
          : res.status(404).send('Failed on edit');
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
