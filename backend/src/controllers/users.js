const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const session = require("express-session");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { Product, Category, User } = require('../db');


async function findUser(username){
try{
const response = await User.findOne({where:{username:username}})
return response;
}catch(e){
    console.log(e)
    return e
}
}


async function findAllUser(){
    try{
        const response =await User.findAll()
        return response
    }catch(e){
        console.log(e)
        return e
    }
}

module.exports = {
    findUser,
    findAllUser,
};