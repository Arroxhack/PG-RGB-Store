const { Router } = require("express");
const { Product, Category } = require("../db");
const router = Router();

// hacemos un get de components (Products)
// preguntamos si tiene query para filtrar por categoria
// si no tiene query trae todos los productos
router.get("/products/", async (req, res, next) => {
  try {
    const cat = req.query.category;
    if (cat) {
      const AllProduct = await Product.findAll({
        include: {
          model: Category,
          where: { name: cat },
        },
      });
      if (AllProduct.length > 0) {
        res.send(AllProduct);
      } else {
        res.send("Error, Not Product with that Category");
      }
    } else {
      const AllProduct = await Product.findAll({
        include: {
          model: Category,
        },
      });

      res.send(AllProduct);
    }
  } catch (e) {
    next(e);
  }
});

// creando un producto y uniendolo a la tabla intermedia de categorias
//  si no existe una categoria se crea una y se hace la relacion
//  (category es un array "HACER FORMULARIO CONTROLADO")

router.post("/products", async (req, res, next) => {
  const {
    name,
    price,
    stock,
    description,
    compatibilityBrands,
    ddr,
    socket,
    image,
    factorMother,
    weight,
    proportions,
    wattsPowerSupply,
    inOffer,
    PorcentageDiscount,
    category,
  } = req.body;
  try {
    if (!name && !price && !description && !image && !category.length) {
      return res.send(new Error("Error not params in body"));
    }
    let newProduct = await Product.create({
      name,
      price,
      stock,
      description,
      compatibilityBrands,
      ddr,
      socket,
      image,
      factorMother,
      weight,
      proportions,
      wattsPowerSupply,
      inOffer,
      PorcentageDiscount,
    });
    // Recorremos el array category para buscar en la base de datos y relacionarlos
    // o crear uno nuevo
    for (let i = 0; i < category.length; i++) {
      let categoryDB = await Category.findOne({
        where: { name: category[i] },
      });
      if (categoryDB) {
        newProduct.addCategory(categoryDB);
      } else {
        let NewCategory = await Category.create({ name: category[i] });
        newProduct.addCategory(NewCategory);
      }
    }
    res.send(newProduct);
  } catch (e) {
    next(e);
  }
});
