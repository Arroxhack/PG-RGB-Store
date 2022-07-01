const { Router } = require('express');
const { Product } = require('../../db');
const router = Router();

router.put('/remove', async (req, res, next) => {
  const products = req.body; // [{id:"1", amount:"1"},{id:"2", amount:"2"}]

  console.log('products: ', products); // [{id:"1", amount:"1"},{id:"2", amount:"2"}]

  if (!products) {
    return res.send('no llega products');
  }

  console.log('products: ', products[0].id);
  products.forEach(async (el) => {
    //busco el prod
    const idNumber = Number(el.id);
    const amountNumber = Number(el.amount);
    const product = await Product.findByPk(idNumber);
    console.log('product:', product);
    //si existe p, lo updateo
    const stock = product.stock - amountNumber;

    if (stock < 0) {
      return res.send('Warning negative stock');
    }

    //Update nos devuelve un array de length 1 con un 1 si fue todo bien y con 0 si salio mal

    if (product) {
      const updated = await Product.update(
        { stock },
        { where: { id: idNumber } }
      );

      updated[0] !== 0
        ? res.send('Correctly edit')
        : res.status(404).send('Failed on edit');
    }
  });
});

module.exports = router;
