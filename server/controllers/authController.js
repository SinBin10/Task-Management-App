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

module.exports = { loginReponse, getLoginReponse };
