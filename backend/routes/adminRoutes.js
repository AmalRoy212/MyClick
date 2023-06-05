const express = require('express');
const router = express();
const adminController = require('../controllers/adminController');
const protect = require('../middlewares/adminAuthMiddleware');

router.post('/singup',adminController.signUpAdmin);
router.post('/login',adminController.authAdminLogin);
router.put('/block/user',protect,adminController.blockUsers);
router.put('/unblock/user',protect,adminController.unblockUsers);
router.put('/users/update/',adminController.userEdit);
router.get('/users/:searchIpd',protect,adminController.searchUsers);
router.post('/users/create',protect,adminController.createUser);
router.delete('/users/delete',protect,adminController.deleteUser);
router.put('/logout',protect,adminController.logoutAdmin);
router.get('/get/users',protect,adminController.getUsers);
router.get('/get/single/user/:id', protect, adminController.getSingleUser);

module.exports = router