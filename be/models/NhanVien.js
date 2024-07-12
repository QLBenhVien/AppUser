const mongoose = require("mongoose");

const nhanvienSchema = new mongoose.Schema({
  MaKhoaID: { type: mongoose.Schema.Types.ObjectId, ref: "Khoa" },
  HoTen: { type: String },
  DiaChi: { type: String },
  GioiTinh: { type: String },
  SDT: { type: String },
});

const NhanVien = mongoose.model("NhanVien", nhanvienSchema);
module.exports = NhanVien;
