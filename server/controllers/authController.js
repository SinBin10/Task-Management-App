const loginReponse = (req, res) => {
  try {
    res.send({ msg: "send response from the controller" });
  } catch (error) {
    console.log("some error occured...");
  }
};

const getLoginReponse = (req, res) => {
  res.send("<h1>Yooooooooooo</h1>");
};

const signupController = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loginReponse, getLoginReponse };
