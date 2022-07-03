const { Router } = require("express");
const { ReviewComment, Product, User } = require("../../db");
const router = Router();
const { findUser } = require("../../controllers/users");

router.post("/NewReview", async (req, res, next) => {
  const { idProduct, Username, idCompra } = req.body;
  console.log(Username, " ACAAAAA user");
  console.log(idProduct, " ACAAAAA ID");
  const user = await findUser(Username);
  if (!user?.name) {
    return res.send("Error no se encuentra el usuario");
  }
  const product = await Product.findByPk(idProduct);

  if (!product) {
    return res.send("Error no se encontro producto con ese id");
  }

  const NewReview = ReviewComment.create({
    idUser: user.id,
    idCompra: idCompra || null,
    idProducto: idProduct,
    Comentado: false,
    comentario: "",
  });
  if (NewReview) {
    return res.send("Done");
  } else {
    return res.send("Error no create new Review Comment");
  }
});

router.put("/commentReview", async (req, res, next) => {
  const { username, idProduct, comment } = req.body;
  const user = await findUser(username);
  if (!user?.name) {
    res.send("Error no se encuentra el usuario");
  }
  const product = await Product.findByPk(idProduct);

  if (product) {
    res.send("Error no se encontro producto con ese id");
  }

  const Review = await ReviewComment.findOne({
    where: { idUser: user.id, idProducto: idProduct },
  });

  if (!Review?.idUser) {
    res.send("Error no se encontro la tabla Review");
  }

  const update = await Review.update({ comentario: comment });

  if ((update[0] = 1)) {
    await Review.update({ Comentado: true });
    res.send("Done");
  } else {
    re.send("Error no se publico el Review");
  }
});
module.exports = router;
