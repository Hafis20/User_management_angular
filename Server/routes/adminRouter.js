const express = require('express');
const adminRouter = express();
const authToken = require('../middleware/auth');

const adminController = require('../Controller/adminController');

adminRouter.get('/getAllUsers',authToken,adminController.getAllUsers);
adminRouter.post('/createUser',authToken,adminController.createUser);
adminRouter.get('/getEditUser',authToken,adminController.getEditUser);
adminRouter.post('/updateUser',authToken,adminController.updateUser);
adminRouter.get('/deleteUser', authToken,adminController.deleteUser);

module.exports = adminRouter; 