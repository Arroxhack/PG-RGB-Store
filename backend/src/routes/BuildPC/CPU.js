const { Router } = require('express');
const { Product, Category } = require('../../db');
const router = Router();

// /arma-tu-pc?brand=amd&cpu=ID&
router.get('/arma-tu-pc', async (req, res, next) => {
  const { brand } = req.query;
  const { cpu } = req.query;
  try {
    //TRAERME LOS CPU Y QUE PUEDAN ELEGIR UNO
    const allCpu = Product.findAll({ where: { brand } });
  } catch (error) {
    console.log(error);
  }
});
