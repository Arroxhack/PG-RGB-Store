const { Router } = require("express");
const { Product, Category, Op } = require("../../db");
const router = Router();

// hacemos un get de components (Products)
// preguntamos si tiene query para filtrar por categoria
// si no tiene query trae todos los productos
router.get("/products/", async (req, res, next) => {
  try {
    const cat = req.query.category;
    if (cat) {
      const All = await Product.findAll();
      let AllProducts = All.map((p) => (p.category.includes(cat) ? p : ""));
      AllProducts = AllProducts.filter((e) => {
        if (e.id) {
          return e;
        }
      });
      if (AllProducts.length > 0) {
        res.send(AllProducts);
      } else {
        res.status(404).send("Error, Not Product with that Category");
      }
    } else {
      const AllProduct = await Product.findAll();
      if (AllProduct.length) {
        res.send(AllProduct);
      } else {
        res.status(404).send("Error, Not Product in DataBase");
      }
    }
  } catch (e) {
    next(e);
  }
});
router.get("/products/:ID", async (req, res, next) => {
  let { ID } = req.params;
  ID = Number(ID);
  console.log(ID);

  try {
    const ProductID = await Product.findByPk(ID);
    if (ProductID) {
      res.send(ProductID);
    } else {
      res.status(404).send("Error, Not Product with that ID");
    }
  } catch (e) {
    next(e);
  }
});

router.get("/products/", async (req, res, next) => {
  const { name } = req.query;
  try {
    //CASOS ==========================
    //product existe -> lo devuelvo
    //product no existe -> devuelvo un mensaje de error
    const response = await Product.findAll({
      where: {
        name: { [Op.like]: `%${name}%` },
      },
    });
    if (response.length > 0) {
      res.send(response);
    } else {
      res.status(404).send("Not product found");
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
