const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ msg: "server has sent a response..." });
});

app.listen(5000, () => {
  console.log("listening on port 5000...");
});
