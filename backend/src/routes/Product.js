const { Router } = require('express');
const { Product, Category, Op } = require('../db');
const router = Router();

// hacemos un get de components (Products)
// preguntamos si tiene query para filtrar por categoria
// si no tiene query trae todos los productos
router.get('/products/', async (req, res, next) => {
  try {
    const cat = req.query.category;
    if (cat) {
      const AllProduct = await Product.findAll({
        include: {
          model: Category,
          where: { name: cat },
          attributes: ['name'],
        },
      });
      if (AllProduct.length) {
        res.send(AllProduct);
      } else {
        res.status(404).send('Error, Not Product with that Category');
      }
    } else {
      const AllProduct = await Product.findAll({
        include: {
          model: Category,
          attributes: ['name'],
        },
      });
      if (AllProduct.length) {
        res.send(AllProduct);
      } else {
        res.status(404).send('Error, Not Product with that Category');
      }
    }
  } catch (e) {
    next(e);
  }
});
router.get('/products/:ID', async (req, res, next) => {
  let { ID } = req.params;
  ID = Number(ID);
  console.log(ID);

  try {
    const ProductID = await Product.findByPk(ID, {
      include: { model: Category, attributes: ['name'] },
    });
    console.log(ProductID);
    if (ProductID) {
      res.send(ProductID);
    } else {
      res.status(404).send('Error, Not Product with that ID');
    }
  } catch (e) {
    next(e);
  }
});

// creando un producto y uniendolo a la tabla intermedia de categorias
//  si no existe una categoria se crea una y se hace la relacion
//  (category es un array "HACER FORMULARIO CONTROLADO")

router.post('/products', async (req, res, next) => {
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
      return res.send(new Error('Error not params in body'));
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

router.get('/product/', async (req, res, next) => {
  const { name } = req.query;
  try {
    //CASOS ==========================
    //product existe -> lo devuelvo
    //product no existe -> devuelvo un mensaje de error
    const response = await Product.findAll({
      include: { model: Category },
      where: {
        name: { [Op.like]: `%${name}%` },
      },
    });
    if (response.length > 0) {
      res.send(response);
    } else {
      res.status(404).send('Not product found');
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
