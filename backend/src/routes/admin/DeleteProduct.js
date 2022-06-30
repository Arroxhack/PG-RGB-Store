const { Router } = require('express');
const { Product } = require('../../db');
const router = Router();

router.delete('/delete-product/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const isReal = await Product.findOne({ where: { id } });

    //destroy devuelve un obj vacio, por eso primero hago un findOne
    //Si existe lo elimino y si no retorno failed
    
    if (isReal?.name.length > 0) {
      await Product.destroy({ where: { id } });
      res.send('Done');
    } else {
      res.status(404).send('Failed on delete');
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
