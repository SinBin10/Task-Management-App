const User = require("../models/userModel.js");

const loginReponse = (req, res) => {
  try {
    res.send({ msg: "send response from the controller" });
  } catch (error) {
    console.log("some error occured...");
  }
};

const signUpReponse = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.send({ msg: "user already exists" });
    const createdUser = new User({
      fullName: name,
      email,
      password,
      confirmPassword,
    });
    await createdUser.save();

    res.json({ msg: "user created succesfully...." });

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
