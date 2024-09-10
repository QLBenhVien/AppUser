const express = require("express");
const adminController = require("../controllers/admin.controller");
const authJwt = require("../../src/middleware/authJwt");
const router = express.Router();
 
router.get("/users", authJwt.verifyToken, adminController.allUsers);

module.exports = router;
