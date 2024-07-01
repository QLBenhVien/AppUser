const express = require("express");
const route = express.Router();

const User = require("../controllers/User.controller");

route.get("/", User.hello);
route.post("/dangky", User.dangkyTK);
route.post("/dangnhap", User.dangnhap);
route.get("/trangchu", User.home);
module.exports = route;
