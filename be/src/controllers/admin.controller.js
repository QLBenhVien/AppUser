const { successResponse, errorResponse } = require("../helpers/index");
const TaiKhoan = require("../models/account.model");

const allUsers = async (req, res) => {
  try {
    let lstUsers = await TaiKhoan.find({});
    let requester = req.user;
    return successResponse(req, res, { lstUsers });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}; 

module.exports = { allUsers };
