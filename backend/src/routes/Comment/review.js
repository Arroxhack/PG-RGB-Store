const { Router } = require("express");
const { ReviewComment, Product, User } = require("../../db");
const router = Router();
const { findUser } = require("../../controllers/users");
// CREAR NuEVO COMMENT  ( ESTO  SE CREA CUANDO SE HACE UNA COMPRA )
router.post("/NewReview", async (req, res, next) => {
  try {
    const { idProduct, Username, idCompra } = req.body;
    const user = await findUser(Username);
    if (!user?.name) {
      return res.send("Error: User was not found");
    }
    const product = await Product.findByPk(idProduct);

    if (!product) {
      return res.send("Error: Theres is no product with that id");
    }

    const NewReview = ReviewComment.create({
      idUser: user.id,
      idCompra: idCompra || null,
      idProducto: idProduct,
      NameProduct: product.name,
      Comentado: false,
      comentario: "",
    });
    if (NewReview) {
      return res.send("Done");
    } else {
      return res.send("Error: Comment was not created");
    }
  } catch (e) {
    console.log(e);
  }
});
// Postear un nuevo Commentario  ( ESTO  SE HACE DESDE EL PROFILE )
router.put("/PostCommentReview", async (req, res, next) => {
  try{

  
  const { username, id, comment } = req.body;
  console.log("ID", id, "USERNAME", username, "COMMENTARIO:", comment);
  const user = await findUser(username);
  if (!user?.name) {
    return res.send("Error: User was not found");
  }
  const Review = await ReviewComment.findOne({
    where: {
      idUser: user.id,
      idProducto: id,
    },
  });

  if (!Review?.idUser) {
    return res.send("Error: Review panel was not found"); // tabla review
  }

  const update = await Review.update({ comentario: comment });

  if ((update[0] = 1)) {
    await Review.update({ Comentado: true });
    return res.send("Done");
  } else {
    return re.send("Error: Review was not published");
  }
}catch(e){
  console.log(e)
}
});
// Conseguir Todos los Comentarios pendiente de 1 usuario  ( ESTO  SE HACE DESDE EL PROFILE )
router.put("/getCommendFalse/:username", async (req, res) => {
  try {
    const { username } = req.params;
    console.log("user", username);
    if (username === undefined || username === null) {
      return res.send("Error: No username");
    }
    const user = await User.findOne({ where: { username: username } });
    console.log(user, "LOLLL");
    if (!user?.id) {
      return res.send("Error: No user");
    }

    const CommendList = await ReviewComment.findAll({
      where: { idUser: user.id, Comentado: false },
    });
    if (CommendList.length > 0) {
      return res.send(CommendList);
    } else {
      return res.send([]);
    }
  } catch (e) {
    console.log(e);
  }
});
// CONSEGUIR TODOS LOS COMENTARIOS DE 1 PRODUCTO // ESTO SE PIDE EN EL DETAIL DE C/PRODUCTO;
router.get("/commentofProduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const CommendList = await ReviewComment.findAll({
      where: { idProducto: id, Comentado: true },
    });
    if (CommendList.length > 0) {
      return res.send(CommendList);
    } else {
      return res.send([]);
    }
  } catch (e) {
    console.log(e);
  }
});
router.get("/AllComment", async (req, res) => {
  try {
    const CommendList = await ReviewComment.findAll({
      where: { Comentado: true },
    });
    if (CommendList.length > 0) {
      return res.send(CommendList);
    } else {
      return res.send(false);
    }
  } catch (e) {
    console.log(e);
  }
});
router.get("/AllCommentFalse", async (req, res) => {
  try{
    const CommendList = await ReviewComment.findAll({
      where: { Comentado: false },
    });
    if (CommendList.length > 0) {
      return res.send(CommendList);
    } else {
      return res.send(false);
    }
  }catch(e){
    console.log(e)
  }
});
module.exports = router;
