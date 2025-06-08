const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginReponse = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.json({ msg: "Please sign up first..." });

    const checkPassword = await bcrypt.compare(
      password,
      existingUser.confirmPassword
    );

    if (!checkPassword) return res.json({ msg: "wrong password" });

    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1hr" }
    );
    res.json({ msg: "user logged in successfully", token });
  } catch (error) {
    console.log("some error occured...");
  }
};

const signUpReponse = async (req, res) => {
  try {
    const { name, email, confirmPassword } = req.body;

    const existingUser = await User.findOne({ email });
    console.log("existing user", existingUser);
    if (existingUser)
      return res.json({ msg: "user already exists please Login" });

    const hashedPassword = await bcrypt.hash(confirmPassword, 10);

    const createdUser = new User({
      fullName: name,
      email,
      confirmPassword: hashedPassword,
    });
    await createdUser.save();

    const token = jwt.sign(
      { userId: createdUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1hr" }
    );

    res.json({ msg: "user created succesfully...." }, token);

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
