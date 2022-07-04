const { Router } = require('express');
const { Product, Category } = require('../../db');
const router = Router();

// /arma-tu-pc?brand=amd&cpu=ID&
router.get('/arma-tu-pc', async (req, res, next) => {
  const { cpu, mother, gabinete, gpu, ram, hdd, sdd, powerSupply } = req.query;

  try {
    //TRAERME LOS CPU Y QUE PUEDAN ELEGIR UNO
    const allCpu = Product.findAll({ where: { brand } });

    //CHECKEAR SI HAY STOCK
    +(
      //DEVUELVO LOS CPU
      res.send(allCpu)
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
