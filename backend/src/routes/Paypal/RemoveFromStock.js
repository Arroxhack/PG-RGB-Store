const { Router } = require("express");
const { Product } = require("../../db");
const router = Router();

router.put("/remove", async (req, res, next) => {
  try {
    const products = req.body; // [{id:"1", amount:"1"},{id:"2", amount:"2"}]

    if (!products) {
      return res.send("Error no llega products");
    }

    const verify = products.map(async (el) => {
      //busco el prod
      const idNumber = Number(el.id);
      const amountNumber = Number(el.amount);
      const product = await Product.findByPk(idNumber);
      //si existe p, lo updateo
      const stock = product.stock - amountNumber;

      // if (stock < 0) {
      //   return res.send("Error");
      // }

      //Update nos devuelve un array de length 1 con un 1 si fue todo bien y con 0 si salio mal

      if (product) {
        const updated = await Product.update(
          { stock },
          { where: { id: idNumber } }
        );

        if (updated[0] !== 0) {
          return "Correctly edit";
        } else {
          return "Error";
        }
      }
    });
    if (verify.includes("Error")) {
      res.status(404).send("Error on update");
    } else {
      res.send("Done");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
