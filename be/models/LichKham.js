const mongoose = require("mongoose");

const lichkhamSchema = new mongoose.Schema({
  BenhNhanID: { type: mongoose.Schema.Types.ObjectId, ref: "BenhNhan" },
  KhoaID: { type: mongoose.Schema.Types.ObjectId, ref: "Khoa" },
  NgayDat: { type: DATE },
});

const LichKham = mongoose.model("LichKham", lichkhamSchema);
module.exports = LichKham;
