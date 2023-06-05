const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const middleService = require('../services/middlewareService');

const protecter = asyncHandler(async function (req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  if (token) {
    
    try {
      const decode = jwt.verify(token, "abc12er345");
      const userId = decode.user
      const user = await middleService.findUser(userId)
      console.log(user);
      if (token === user.accessToken) {
        if (user) {
          req.body.user_Id = user._id;
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