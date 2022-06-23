const { Router } = require('express');
const { Product, Category } = require('../../db');
const router = Router();

router.put('/products/:id', async (req, res) => {
  //HACER BOTON EDIT -> ABRE MODAL -> MANDAN DATOS POR BODY -> EDITA
  //ACOMODAR RUTA -> PODER EDITAR CATEGORIA
  const { id } = req.params;
  const {
    name,
    price,
    stock,
    description,
    compatibiliyBrands,
    ddr,
    socket,
    image,
    factorMother,
    weight,
    proportions,
    wattsPowerSupply,
    inOffer,
    percentageDiscount,
    category,
  } = req.body;

  const newProduct = {
    name,
    price,
    stock,
    description,
    compatibiliyBrands,
    ddr,
    socket,
    image,
    factorMother,
    weight,
    proportions,
    wattsPowerSupply,
    inOffer,
    percentageDiscount,
    category
  };

  const toEdit = await Product.update(newProduct, {
    where: { id },
  });

  //Update nos devuelve un array de length 1 con un 1 si fue todo bien y con 0 si salio mal
  toEdit[0] === 1
    ? res.send('Correctly edit')
    : res.status(404).send('Failed on edit');
});

module.exports = router;
