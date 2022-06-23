const { Router } = require('express');
const { Brand } = require('../../db');
const router = Router();

// hacemos un get de components (Products)
// preguntamos si tiene query para filtrar por categoria
// si no tiene query trae todos los productos
router.get('/brands', async (req, res, next) => {
  try {
    const AllBrand = await Brand.findAll();
    res.send(AllBrand);
  } catch (e) {
    next(e);
  }
});

router.post('/brands', async (req, res, next) => {
  const { name } = req.body;
  //console.log(name, 'sd');
  try {
    if (name) {
      let NewBrand = await Brand.create({ name });
      res.send(NewBrand);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
