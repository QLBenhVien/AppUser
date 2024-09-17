const mongoose = require("mongoose");

const lichkhamSchema = new mongoose.Schema({
  NhanVienID: { type: mongoose.Schema.Types.ObjectId, ref: "NhanVien" },
  BenhNhanID: { type: mongoose.Schema.Types.ObjectId, ref: "BenhNhan" },
  KhoaID: { type: mongoose.Schema.Types.ObjectId, ref: "Khoa" },
  NgayDat: { type: String },
  STT: { type: Number },
});

const LichKham = mongoose.model("LichKham", lichkhamSchema);
module.exports = LichKham;
