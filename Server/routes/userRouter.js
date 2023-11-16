const express = require('express');
const userRouter = express();
const authToken = require('../middleware/auth');
const userController = require('../Controller/userController')

const multer = require('multer');


// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Images/'); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for the uploaded file
  },
});
const upload = multer({ storage: storage });

userRouter.post('/registerUser',userController.registerUser);
userRouter.post('/loginUser',userController.loginUser);
userRouter.get('/duplicateEmail',userController.duplicateEmail);
userRouter.post('/uploadImage',authToken,upload.single('img'),userController.uploadImage);


module.exports = userRouter