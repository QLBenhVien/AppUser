const express = require("express");
const route = express.Router();

const User = require("../controllers/User.controller");

route.get("/", User.hello);
route.post("/dangkyTK", User.dangkyTK);
route.post("/dangnhap", User.dangnhap);
route.get("/trangchu", User.home);
route.put("/capnhapthongtin", User.Capnhapthongtin);

// dang ky kham benh pages
route.get("/dangkykhambenh/theongay", User.Theongay);
route.post("/dangkykhambenh/datkham", User.Datkham);

route.get("/thongbao", User.thongbao);
route.post("/laylaimk", User.laylaimk);
route.post("/phieukham", User.phieukham);
route.post("/chitietphieukham", User.chitietphieukham);

module.exports = route;
