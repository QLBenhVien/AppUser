const mongoose = require("mongoose");
require("dotenv").config();

module.exports.connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ngocduy14062003:FmlkgsIAlH9S1ICh@ngocduy-cnpm.bssbojk.mongodb.net/?retryWrites=true&w=majority&appName=ngocduy-cnpm/app_hospital"
    );
    console.log("kết nối thành công");
  } catch (error) {
    console.log(error);
  }
};

//username: ngocduy14062003
// password: FmlkgsIAlH9S1ICh
