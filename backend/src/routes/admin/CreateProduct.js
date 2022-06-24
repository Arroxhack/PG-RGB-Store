const { Router } = require('express');
const { Product, Category } = require('../../db');
const router = Router();
// creando un producto y uniendolo a la tabla intermedia de categorias
//  si no existe una categoria se crea una y se hace la relacion
//  (category es un array "HACER FORMULARIO CONTROLADO")

// router.post('/products', async (req, res, next) => {
//   // const {
  //   name,
  //   price,
  //   stock,
  //   description,
  //   compatibilityBrands,
  //   ddr,
  //   socket,
  //   image,
  //   factorMother,
  //   weight,
  //   proportions,
  //   wattsPowerSupply,
  //   inOffer,
  //   PorcentageDiscount,
  //   category,
//   // } = req.body;
//     const {
//     name,
//     price,
//     stock,
//     description,
//     image,
//     category,
//     brand
//   } = req.body;
//   try {
//     if (!name && !price && !description && !image && !category) {
//       return res.send(new Error('Error not params in body'));
//     }
//     let newProduct = await Product.create({
//       name,
//       price,
//       stock,
//       description,
//       image,
//       category,
//       brand
//       // name,
//       // price,
//       // stock,
//       // description,
//       // compatibilityBrands,
//       // ddr,
//       // socket,
//       // image,
//       // factorMother,
//       // weight,
//       // proportions,
//       // wattsPowerSupply,
//       // inOffer,
//       // PorcentageDiscount,
//       // category,
//     });
//     // Recorremos el array category para buscar en la base de datos y relacionarlos
//     // o crear uno nuevo

//     for (let i = 0; i < category.length; i++) {
//       let categoryDB = await Category.findOne({
//         where: { name: category[i] },
//       });
//       if (!categoryDB) {
//         await Category.create({ name: category[i] });
//       }
//     }
//     res.send(newProduct);
//   } catch (e) {
//     next(e);
//   }
// });

router.post('/create-product', async(req, res, next)=>{
  try {
    const {
    name,
    price,
    stock,
    description,
    image,
    category,
    brand
    } = req.body

    const newProduct = await  Product.create({
      name,
      price,
      stock,
      description,
      image,
      brand,
      category
    })

    category.map(c=>{
      Category.findOrCreate({where: {name: c}})
    })

    res.send(newProduct)

  } catch (error) {
    next(error)
  }
})

module.exports = router;
