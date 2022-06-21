const { Router } = require('express');
const { Product, Category } = require('../../db');
const router = Router();
const axios = require('axios');
//Poner Link de su API de firebase
const api = 'https://pg-api-6f759-default-rtdb.firebaseio.com/Products.json';
// HARCODEAR NO ME DEJA DEJARLOS EN NULL <---- VER URGENTE
const stock = 6;
const description = 'Holaaa';
const compatibilityBrands = 'AMD';
const ddr = 4;
const socket = 'sad';
const factorMother = 'standard-ATX';
const weight = 56;
const proportions = '45x45';
const wattsPowerSupply = 45;
const inOffer = true;
const PorcentageDiscount = 45;
router.post('/', async (req, res, next) => {
  try {
    const AllProduct = await axios.get(
      'https://pg-api-6f759-default-rtdb.firebaseio.com/Products.json'
    );
    const result = AllProduct.data ? AllProduct.data : [];
    if (result) {
      for (let i = 0; i < result.length; i++) {
        const name = result[i].name;
        const image = result[i].image;
        const price = result[i].price;
        let newProduct = await Product.create({
          name,
          image,
          price,
          stock,
          description,
          compatibilityBrands,
          ddr,
          socket,
          factorMother,
          weight,
          proportions,
          wattsPowerSupply,
          inOffer,
          PorcentageDiscount,
        });

        let categoryDB = await Category.findOne({
          where: { name: result[i].category },
        });
        if (categoryDB) {
          newProduct.addCategory(categoryDB);
        } else {
          let NewCategory = await Category.create({ name: result[i].category });
          newProduct.addCategory(NewCategory);
        }
      }
      res.send('Base de Datos Llena satisfactoriamente :D ');
    } else {
      res.status(401).send('La Api No Funciona');
    }
  } catch (e) {
    next(e);
  }
});
module.exports = router;
