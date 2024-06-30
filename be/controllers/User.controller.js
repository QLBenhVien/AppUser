const bcrypt = require("bcrypt");
const TaiKhoan = require("../models/account");
const { message } = require("antd");

module.exports.hello = async (req, res) => {
  res.json("day laf duong link /user");
};

module.exports.dangkyTK = async (req, res, next) => {
  try {
    const userData = new TaiKhoan(req.body);
    console.log(userData);
    const { email } = userData;
    console.log(email);
    const userExit = await TaiKhoan.findOne({ email });

    if (userExit) {
      return res.status(400).json({ message: "User already exits." });
    }

    // Mã hóa mật khẩu trước khi lưu
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);

    const saveUser = await userData.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json({ error: "internal sever error" });
  }
};

module.exports.dangnhap = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await TaiKhoan.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "user does not exits" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid password." });
    }
    res.status(200).json({ message: "login successfil" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
