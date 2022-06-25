const { Router } = require('express');
const { Product } = require('../../db');
const router = Router();

router.put('/products/:id', async (req, res) => {
  //HACER BOTON EDIT -> ABRE MODAL -> MANDAN DATOS POR BODY -> EDITA
  //ACOMODAR RUTA -> PODER EDITAR CATEGORIA
  const { id } = req.params;
  const objFinal = checkProduct(req.body);
  const toEdit = await Product.update(objFinal, {
    where: { id },
  });
  //Update nos devuelve un array de length 1 con un 1 si fue todo bien y con 0 si salio mal
  toEdit[0] === 1
    ? res.send('Correctly edit')
    : res.status(404).send('Failed on edit');
});

function checkProduct({
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
}) {
  let objFinal = {};
  if (name) {
    objFinal.name = name;
  }
  if (price) {
    objFinal.price = price;
  }
  if (stock) {
    objFinal.stock = stock;
  }
  if (description) {
    objFinal.description = description;
  }
  if (compatibiliyBrands) {
    objFinal.compatibiliyBrands = compatibiliyBrands;
  }
  if (ddr) {
    objFinal.ddr = ddr;
  }
  if (socket) {
    objFinal.socket = socket;
  }
  if (image) {
    objFinal.image = image;
  }
  if (factorMother) {
    objFinal.factorMother = factorMother;
  }
  if (weight) {
    objFinal.weight = weight;
  }
  if (proportions) {
    objFinal.proportions = proportions;
  }
  if (wattsPowerSupply) {
    objFinal.wattsPowerSupply = wattsPowerSupply;
  }
  if (inOffer) {
    objFinal.inOffer = inOffer;
  }
  if (percentageDiscount) {
    objFinal.percentageDiscount = percentageDiscount;
  }
  if (category) {
    objFinal.category = category;
  }
  return objFinal;
}

module.exports = router;
