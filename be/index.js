const express = require("express");
const app = express();
const dotnet = require("dotenv");
const database = require("./config/database.js");
const bodyParser = require("body-parser"); // unistall
const route = require("./routers/user.route.js");
dotnet.config();

// Middleware để phân tích cú pháp yêu cầu có nội dung JSON
app.use(express.json());
// Middleware để phân tích cú pháp yêu cầu URL-encoded
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

console.log("Attempting to connect to the database...");
database.connectDB();

//route user
app.use("/user", route);

//route admin

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
