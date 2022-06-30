const { Router } = require('express');
const { Product, Category, Brand } = require('../../db');
const router = Router();

router.get('/filter/', async (req, res, next) => {
  const { brand, category } = req.query;
  try {
    const allProductNotFilter = await Product.findAll();
    const allProduct = allProductNotFilter.filter((p) => p.stock > 0);

    if (category && category !== 'all' && brand && brand !== 'all') {
      const filterCatBrand = [];

      allProduct.forEach((p) => {
        const cat = p.category[0];
        const bran = p.brand;
        if (cat === category && bran === brand) {
          filterCatBrand.push(p);
        }
      });

      res.status(201).send(filterCatBrand);
    }
    if (category === 'all' && brand) {
      const allBrand = [];

      allProduct.forEach((p) => {
        if (brand === p.brand) {
          allBrand.push(p);
        }
      });

      res.status(201).send(allBrand);
    }
    if (category && category !== 'all' && brand === undefined) {
      const filterCat = [];
      allProduct.forEach((p) => {
        const cat = p.category[0];
        if (cat === category) {
          filterCat.push(p);
        }
      });
      res.status(201).send(filterCat);
    }
    if (brand === 'all') {
      const filterCat = [];
      allProduct.forEach((p) => {
        const cat = p.category[0];
        if (cat === category) {
          filterCat.push(p);
        }
      });
      res.status(201).send(filterCat);
    }
    if (category === 'all') {
      res.status(201).send(allProduct);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
