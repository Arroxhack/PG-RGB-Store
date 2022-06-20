const { Router } = require("express");
const { Product, Category } = require("../db");
const router = Router();


router.get("/category", async (req, res, next) => {
  try {
    const AllCategory = Category.findAll();
    res.send(AllCategory);
  } catch (e) {
    next(e);
  }
});
