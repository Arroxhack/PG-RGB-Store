const { Router } = require('express');
const { Product } = require('../../db');
const router = Router();

router.put('/edit-products/:id', async (req, res, next) => {
  //HACER BOTON EDIT -> ABRE MODAL -> MANDAN DATOS POR BODY -> EDITA
  //ACOMODAR RUTA -> PODER EDITAR CATEGORIA
  const { id } = req.params;
  const {
    name,
    price,
    stock,
    description,
    compatibilityBrands,
    ddr,
    socket,
    image,
    factorMother,
    weight,
    dimensions,
    wattsPowerSupply,
    inOffer,
    percentageDiscount,
    category,
    brand,
  } = req.body;
  try {
    const editProduct = await Product.update({
        name,
        price,
        stock,
        description,
        compatibilityBrands,
        ddr,
        socket,
        image,
        factorMother,
        weight,
        dimensions,
        wattsPowerSupply,
        inOffer,
        percentageDiscount,
        category,
        brand,
    },{where:{id}})

    res.send(editProduct)
  } catch (error) {
    next(error)
  }
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
