// Require module
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");

// Register
const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, gender, role } = req.body;
    const user = await User.create({
      name: name,
      email: email,
      password: password,
      phone: phone,
      gender: gender,
      role: role,
    });
    res.json(user);
  } catch (error) {
    console.log(error.message);
  }
};

// Duplicate Email while registering
const duplicateEmail = async (req, res) => {
  try {
    const email = req.query.email;
    console.log(email);
    const userExists = await User.find({ email: email });
    res.json(userExists);
  } catch (error) {
    console.log(error.message);
  }
};

// Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // jwt
    const user = {
      email: email,
    };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

    // Checking the user is avaliable
    const userData = await User.find({ email: email, password: password });
    const userInfo = {
      _id: userData[0]._id,
      name: userData[0].name,
      email: userData[0].email,
      role: userData[0].role,
      image: userData[0].image,
    };
    // console.log(userInfo);

    res.status(200).json([userInfo, accessToken]);
  } catch (error) {
    res.status(404).json({ error: error.message });
    console.log(error.message);
  }
};

const uploadImage = async (req, res) => {
  try {
    console.log(req?.user)
    const { id } = req.body;
    const imgName = req.file.originalname;
    const user = await User.findByIdAndUpdate(id, {
      $set: {
        image: `http://localhost:5000/${imgName}`,
      },
    },{new:true});
    if (user) {
      const profileImage = user.image;
      res.status(200).json(profileImage);
    }
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  duplicateEmail,
  uploadImage,
};
