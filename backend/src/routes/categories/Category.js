const { Router } = require("express");
const { Product, Category } = require("../../db");
const router = Router();

router.get("/category", async (req, res, next) => {
  try {
    const AllCategory = await Category.findAll();
    res.send(AllCategory);
  } catch (e) {
    next(e);
  }
});

router.post("/category", async (req, res, next) => {
  const { category } = req.body;
  try {
    let NewCategory = await Category.create({ name: category });
    res.send(NewCategory);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
