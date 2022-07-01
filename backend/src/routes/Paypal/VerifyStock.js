const { Router } = require("express");
const { Product } = require("../../db");
const router = Router();

router.post("/VerifyStock", async (req, res, next) => {
  const products = req.body;
  try {
    let productsMap = products.map(async (el) => {
      const productos = await Product.findByPk(el.id);
      if (productos.stock < el.amount) {
        return productos.name;
      }
    });
    productsMap = await Promise.all(productsMap);
    productsMap = productsMap.filter((e) => e != undefined);
    if (productsMap.length > 0) {
      console.log(productsMap);
      res.send(" " + productsMap.join(", "));
    } else {
      res.send("Success");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
