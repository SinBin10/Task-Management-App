const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ msg: "unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    console.log("token:", token);

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.json({ msg: "session expired! please login again" });
  }
};

module.exports = { authMiddleware };
