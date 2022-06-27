const { Router } = require('express');
const { Product, Category, Brand } = require('../../db');
const router = Router();
// creando un producto y uniendolo a la tabla intermedia de categorias
//  si no existe una categoria se crea una y se hace la relacion
//  (category es un array "HACER FORMULARIO CONTROLADO")

router.post('/create-product', async (req, res, next) => {
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
    proportions,
    wattsPowerSupply,
    inOffer,
    PorcentageDiscount,
    category,
    brand,
  } = req.body;
  try {
    if (!name && !price && !description && !image && !category.length) {
      return res.send(new Error('Error not params in body'));
    }
    let newProduct = await Product.create({
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
      proportions,
      wattsPowerSupply,
      inOffer,
      PorcentageDiscount,
      category,
      brand,
    });
    // Recorremos el array category para buscar en la base de datos y relacionarlos
    // o crear uno nuevo

    const brandDB = await Brand.findOne({ where: { name: brand } });
    if (!brandDB) {
      await Brand.create({ name: brand });
    }

    for (let i = 0; i < category.length; i++) {
      let categoryDB = await Category.findOne({
        where: { name: category[i] },
      });
      if (!categoryDB) {
        await Category.create({ name: category[i] });
      }
    }
    res.send(newProduct);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
