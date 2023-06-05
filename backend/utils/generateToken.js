const jwt = require('jsonwebtoken');

const generateAthToken = (user) => {
  const { _id } = user;
  const userId = { user: _id }
  const accessToken = jwt.sign(userId, "abc12er345");
  return accessToken;
}
module.exports = generateAthToken;