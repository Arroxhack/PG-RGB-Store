const { Router } = require("express");
const { Product } = require("../../db");
const router = Router();

router.post("/VerifyStock", async (req, res, next) => {     //{id, amount}
  const products = req.body;
  try {
    let productsMap = products.map(async (el) => { //arreglo de nombres de productos a los que no les da el stock
      const productos = await Product.findByPk(el.id); //encuentro el producto
      if (productos.stock < el.amount) { // si el stock de ese producto es menor a lo que quiere comprar el usuario
        return productos.name;
      }
    });
    productsMap = await Promise.all(productsMap); // por alguna razon el async await del map no resuelve la promesa y hay que usar esto
    productsMap = productsMap.filter((e) => e != undefined);
    if (productsMap.length > 0) {
      res.send(" " + productsMap.join(", ")); // enviamos un string con los nombres de los productos a los que no les da el stock
    } else {
      res.send("Success"); // enviamos string Success (hay stock)
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
