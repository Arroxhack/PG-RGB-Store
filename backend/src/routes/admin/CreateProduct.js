const { Router } = require('express');
const { Product, Category } = require('../../db');
const router = Router();
// creando un producto y uniendolo a la tabla intermedia de categorias
//  si no existe una categoria se crea una y se hace la relacion
//  (category es un array "HACER FORMULARIO CONTROLADO")

router.post('/products', async (req, res, next) => {
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
    });
    // Recorremos el array category para buscar en la base de datos y relacionarlos
    // o crear uno nuevo

    for (let i = 0; i < category.length; i++) {
      let categoryDB = await Category.findOne({
        where: { name: category[i] },
      });
      if (categoryDB) {
        newProduct.addCategory(categoryDB);
      } else {
        let NewCategory = await Category.create({ name: category[i] });
        newProduct.addCategory(NewCategory);
      }
    }
    res.send(newProduct);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
