const { Router } = require("express");
const express = require("express");
const router = Router();
const { User } = require("../../db");

router.put("/givePoint", async (req, res) => {
  try {
    const { username, totalMount } = req.body;
    const user = await User.findOne({ where: { username: username } });
    if (totalMount == undefined) {
      return res.send("Error , No amount send");
    }

    if (user?.username != username) {
      return res.send("Error , usuario no encontrado");
    }
    let PointsWin = 0;
    let pointsToGive = user.points;
    if (totalMount > 99 && totalMount < 500) {
      PointsWin += Math.floor(totalMount * 0.03);
      pointsToGive += totalMount * 0.03;
      pointsToGive = Math.floor(pointsToGive);
    } else if (totalMount >= 500) {
      PointsWin += Math.floor(totalMount * 0.05);
      pointsToGive += totalMount * 0.05;
      pointsToGive = Math.floor(pointsToGive);
    }

    await user.update({ points: pointsToGive });
    return res.send(`Points win in this purchase: ${PointsWin}`);
  } catch (e) {
    console.log(e);
  }
});

router.put("/takepoints", async (req, res) => {
  try {
    const { username, totaltake } = req.body;
    console.log(totaltake, "TOTAL QUE SACAN");
    console.log(username, "USERNAME");

    const user = await User.findOne({ where: { username: username } });
    if (totaltake == undefined) {
      console.log("Error 1");
      return res.send("Error , No amount send");
    }

    if (user?.username != username) {
      return res.send("Error , usuario no encontrado");
      console.log("Error 2");
    }

    let PointTake = user.points - totaltake;

    await user.update({ points: user.points - totaltake });
    console.log("LLEGO!");

    return res.send(`Done`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
