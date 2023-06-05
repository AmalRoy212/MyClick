const jwt = require('jsonwebtoken');

const generateAthToken = (user) => {
  const { _id } = user;
  const userId = { user: _id }
  const accessToken = jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET);
  return accessToken;
}
module.exports = generateAthToken;