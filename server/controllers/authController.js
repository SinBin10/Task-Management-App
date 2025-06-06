const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginReponse = (req, res) => {
  try {
    res.send({ msg: "send response from the controller" });
  } catch (error) {
    console.log("some error occured...");
  }
};

const signUpReponse = async (req, res) => {
  try {
    const { name, email, confirmPassword } = req.body;

    const existingUser = await User.findOne({ email });
    console.log(name, email, confirmPassword);
    if (existingUser) return res.send({ msg: "user already exists" });

    const hashedPassword = await bcrypt.hash(confirmPassword, 10);

    const createdUser = new User({
      fullName: name,
      email,
      confirmPassword: hashedPassword,
    });
    await createdUser.save();

    const token = jwt.sign({ userId: createdUser._id }, process.env.SECRET_KEY);

    const decodedToken = jwt.decode(token);
    console.log(decodedToken);

    res.json({ msg: "user created succesfully....", token: token });

    // const createUser = async () => {
    //   await User.create({
    //     name,
    //     email,
    //     password,
    //     confirmPassword,
    //   });
    // };
  } catch (error) {
    console.log("error in signup  ...");
  }
};

module.exports = { loginReponse, signUpReponse };
