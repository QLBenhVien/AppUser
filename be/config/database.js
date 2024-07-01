const mongoose = require("mongoose");
require("dotenv").config();

module.exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("kết nối thành công");
  } catch (error) {
    console.log(error);
  }
};

//username: ngocduy14062003
// password: FmlkgsIAlH9S1ICh
