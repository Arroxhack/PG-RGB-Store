const { Router } = require("express");
const { User, Product } = require("../../db");
const router = Router();

//Cargar carrito en la bd
router.post("/userCart", async (req, res, next) => {
  let { email, cartProductArray } = req.body;
  const user = await User.findOne({ where: { email } });
  cartProductArray = JSON.parse(cartProductArray);
  console.log(cartProductArray);
  // try {
  //caso carrito vacio
  //caso carrito con cosas
  if (!cartProductArray?.length) {
    return res.send("Fail: cart is empty");
  }

  if (cartProductArray.length > 0) {
    if (!user) {
      return res.send("Fail: User doesnt exist");
    }

    //map -> verifica que cada prod coincida con la lista de prod
    let productsVerified = cartProductArray?.map(async (p) => {
      const product = await Product.findOne({
        where: {
          id: p.id,
          price: p.price,
          name: p.name,
          inOffer: p.inOffer,
          percentageDiscount: p.percentageDiscount,
        },
      });

      if (product?.id === p.id) {
        return product;
      }
    });

    productsVerified = await Promise.all(productsVerified);
    productsVerified = productsVerified.filter(
      (e) => e !== undefined && e !== null
    );

    if (productsVerified.length !== cartProductArray.length) {
      user.set({
        lock: true,
      });
    } else {
      const actualCart = user.cartProducts.concat(productsVerified);
      const miCarritoSinDuplicados = actualCart.reduce(
        (acumulador, valorActual) => {
          const elementoYaExiste = acumulador.find(
            (elemento) => elemento.name === valorActual.name
          );
          if (elementoYaExiste) {
            return acumulador.map((elemento) => {
              if (elemento.name === valorActual.name) {
                return {
                  ...elemento,
                  amount: elemento.amount + valorActual.amount,
                };
              }

              return elemento;
            });
          }

          return [...acumulador, valorActual];
        },
        []
      );
      user.set({
        cartProducts: miCarritoSinDuplicados,
      });
    }

    await user.save();
  }
  user.lock ? res.send("Error: User blocked") : res.send("done");
  // } catch (e) {
  //   res.status(404).send('Error: updating user cart');
  // }
});

//Recuperar carrito de la bd
// router.get('/userCart/:email', async (req, res, next) => {
//   const { email } = req.params;

//   //traerme los datos
//   const user = await User.findOne({ where: { email } });

//   //ver si el user existe
//   if (!user) {
//     return res.send('User doesnt exist');
//   }

//   //guardar el carrito
//   const userCart = user.cartProducts;

//   //devolver el carrito
//   res.send(userCart);
// });

module.exports = router;
