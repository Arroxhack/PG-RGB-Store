const { Router } = require('express');
const { Product, Category, Op, Brand } = require('../../db');
const router = Router();

// hacemos un get de components (Products)
// preguntamos si tiene query para filtrar por categoria
// si no tiene query trae todos los productos
router.get('/products/', async (req, res, next) => {
  try {
    const cat = req.query.category;

    if (cat && cat !=='all') {
      const All = await Product.findAll();
      let AllProducts = All.map((p) => (p.category.includes(cat) ? p : ''));
      AllProducts = AllProducts.filter((e) => {
        if (e.id && e.stock > 0) {
          return e;
        }
      });
      if (AllProducts.length > 0) {
        res.send(AllProducts);
      } else {
        res.status(404).send('Error, Not Product with that Category');
      }
    } else {
      let AllProduct = await Product.findAll();
      AllProduct = AllProduct.filter((e) => {
        if (e.stock > 0) return e;
      });
      if (AllProduct.length) {
        res.send(AllProduct);
      } else {
        res.status(404).send('Error, Not Product in DataBase');
      }
    }
  } catch (e) {
    next(e);
  }
});

router.get('/brands/',async (req,res,next)=>{
  try {
    const marca = req.query.brand;
    console.log(marca)
    if (marca) {
      const All= await Product.findAll();
      let AllProduct = All.map((p) => (p.brand === marca ? p : ''));
      AllProduct = AllProduct.filter((e) => {
        if (e.id) {
          return e;
        }})
      if (AllProduct.length > 0) {
        res.send(AllProduct);
      } else {
        res.status(404).send('Error, Not Product with that Brand');
      }
    } else {
      const allProducts = await Product.findAll();
      if (allProducts.length) {
        res.send(allProducts);
      } else {
        res.status(404).send('Error, Not Product in DataBase');
      }
    }
  } catch (e) {
    next(e);
  }
})


router.get('/products/:ID', async (req, res, next) => {
  let { ID } = req.params;
  ID = Number(ID);
  console.log(ID);

  try {
    const ProductID = await Product.findByPk(ID);
    if (ProductID) {
      res.send(ProductID);
    } else {
      res.status(404).send('Error, Not Product with that ID');
    }
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
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
    });
    if (response.length > 0) {
      console.log(response, ' soy response  ');
      res.send(response);
    } else {
      res.status(404).send('Not product found');
    }
  } catch (error) {
    next(error);
  }
});

router.get('/gpu', async (req, res, next) => {
  const All = await Product.findAll();
  try {
      let gpus = All.filter(g => g.category.includes("GPU"));
      res.send(gpus)
   }catch (e) {
    next(e);
  }
})


module.exports = router;
