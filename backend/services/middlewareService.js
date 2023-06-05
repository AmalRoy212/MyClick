const userModel = require('../models/userModel');

const findUser = async (_id) => {
  const user = await userModel.findById(_id);
  return user || false
} 

module.exports = {
  findUser
}