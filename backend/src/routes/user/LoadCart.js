const { Router } = require("express");
const { User, Product } = require("../../db");
const router = Router();

//Cargar carrito en la bd
router.post("/userCart", async (req, res, next) => {


  let { email, cartProductArray } = req.body;
  
  const user = await User.findOne({ where: { email } }); //usuario logeado
  // console.log("user: ", user);

  cartProductArray = JSON.parse(cartProductArray); //arreglo de objetos products
  // console.log(cartProductArray);
  // try {
  //caso carrito vacio
  //caso carrito con cosas
  if (!cartProductArray?.length && !user.cartProducts) {
    return res.send("Fail: cart is empty");
  }

  if (cartProductArray.length > 0) {
    if (!user) {
      return res.send("Fail: User doesnt exist");
    }

    //map -> verifica que cada prod coincida con la lista de prod
    let productsVerified = cartProductArray?.map(async (p) => {
      let product = await Product.findOne({  //trae los productos que coincidan 
        where: {
          id: p.id,
          price: p.price,
          name: p.name,
          inOffer: p.inOffer,
          percentageDiscount: p.percentageDiscount,
        },
      });
      if (product?.id === p.id) {
        product.dataValues.amount = p.amount
        return product;
      }
    });

    productsVerified = await Promise.all(productsVerified);

    // console.log("productsVerified: ", productsVerified[0].toJSON())

    productsVerified = productsVerified.filter((e) => e !== undefined && e !== null);

    // console.log("productsVerified: ", productsVerified)

    if (productsVerified.length !== cartProductArray.length) {
      user.set({
        lock: true,
      });
    } else {
      // console.log("productsVerified: ", productsVerified)
      // console.log("userCartProducts: ", user.cartProducts);

      let dataOne = user.cartProducts;
      let dataTwo = productsVerified.map(e => e.toJSON());

      var sumObjectsByKey = (...objs) => 
        Object.values(objs.reduce((a, e) => {
          a[e.id] = a[e.id] || {id: e.id};

          for (const k in e) {
            if (k !== "id") {
              a[e.id][k] = a[e.id][k] ? k === "amount" ? a[e.id][k] + e[k] : e[k] : e[k];
            }
          }
          return a;
        }, {}))
      ;

      let dataFinal = sumObjectsByKey(...dataOne , ...dataTwo)
      // console.log("dataFinal: ", dataFinal)

      // const actualCart = user.cartProducts.concat(productsVerified);

      // console.log("actualCart: ", actualCart);

      // const miCarritoSinDuplicados = actualCart.reduce(
      //   (acumulador, valorActual) => {
      //     const elementoYaExiste = acumulador.find(
      //       (elemento) => elemento.name === valorActual.name
      //     );
      //     if (elementoYaExiste) {
      //       return acumulador.map((elemento) => {
      //         if (elemento.name === valorActual.name) {
      //           return {
      //             ...elemento,
      //             amount: elemento.amount + valorActual.amount,
      //           };
      //         }

      //         return elemento;
      //       });
      //     }

      //     return [...acumulador, valorActual];
      //   },
      //   []
      // );
      // console.log("miCarritoSinDuplicados: ", miCarritoSinDuplicados);
      user.set({
        cartProducts: dataFinal,
      });
    }
    await user.save();
  }
  user.lock ? res.send("Error: User blocked") : res.send("done");
  // } catch (e) {
  //   res.status(404).send('Error: updating user cart');
  // }
});

// Recuperar carrito de la bd
router.get('/userCart/', async (req, res, next) => {
  const { email } = req.query;

  //traerme los datos
  const user = await User.findOne({ where: { email } });

  //ver si el user existe
  if (!user) {
    return res.send('User doesnt exist');
  }

  //guardar el carrito
  const userCart = user.cartProducts;

  //devolver el carrito
  res.send(userCart);
});

router.post("/changeCart", async (req, res, next) => {

  let { email, cartProductArray } = req.body;
  
  const user = await User.findOne({ where: { email } }); //usuario logeado
  // console.log("user: ", user);

  cartProductArray = JSON.parse(cartProductArray); //arreglo de objetos products
  // console.log(cartProductArray);
  // try {
  //caso carrito vacio
  //caso carrito con cosas
  if (!cartProductArray?.length) {
    // console.log("Entre aca")
    // console.log("user: ", user)
    user.set({
      cartProducts: [{}],
    });
    user.save();
    return res.send("done");
  }

  if (cartProductArray.length > 0) {
    if (!user) {
      return res.send("Fail: User doesnt exist");
    }

    //map -> verifica que cada prod coincida con la lista de prod
    let productsVerified = cartProductArray?.map(async (p) => {
      let product = await Product.findOne({  //trae los productos que coincidan 
        where: {
          id: p.id,
          price: p.price,
          name: p.name,
          inOffer: p.inOffer,
          percentageDiscount: p.percentageDiscount,
        },
      });
      if (product?.id === p.id) {
        product.dataValues.amount = p.amount
        return product;
      }
    });

    productsVerified = await Promise.all(productsVerified);

    // console.log("productsVerified: ", productsVerified[0].toJSON())

    productsVerified = productsVerified.filter((e) => e !== undefined && e !== null);

    // console.log("productsVerified: ", productsVerified)

    if (productsVerified.length !== cartProductArray.length) {
      user.set({
        lock: true,
      });
    } else {

      let dataFinal = productsVerified.map(e => e.toJSON());
      // console.log("dataFinal: ", dataFinal)

      user.set({
        cartProducts: dataFinal,
      });
    }
    await user.save();
  }
  user.lock ? res.send("Error: User blocked") : res.send("done");
  // } catch (e) {
  //   res.status(404).send('Error: updating user cart');
  // }
});

module.exports = router;
