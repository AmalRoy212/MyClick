const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const adminModel = require('../models/adminModel');

const protecter = asyncHandler(async function (req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const user = await adminModel.findById({ _id: decode.user });
      if (token === user.accessToken) {
        if (user) {
          req.body.adminId = user._id;
          next();
        } else {
          res.status(404);
          throw new Error('User is Invalid');
        }
      } else {
        res.status(401);
        throw new Error('The token is not longer valid');
      }

    } catch (error) {
      res.status(401);
      throw new Error('Not Autherized invalid token');
    }
  } else {
    res.status(401);
    throw new Error('User is not Autherized or not having a Token');
  }
})

module.exports = protecter;