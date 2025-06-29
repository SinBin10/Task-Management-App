const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");
const dashboardRouter = require("./routes/dashboardRoutes");
require("dotenv").config();

const app = express();

//app.use is a middleware used to specify that all the incoming
//requests must pass from this middleware irrespective of the routes
app.use(cors());
app.use(express.json());

app.use("/", authRouter);
app.use("/", dashboardRouter);

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   //res.send also works fine to send a simple text response
//   // res.send("a winner at heart...");

//   res.json({
//     email: email,
//     password: password,
//     msg: "server has sent a response 2...",
//   });
// });

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected to mongodb....");
  app.listen(5000, () => {
    console.log("listening on port 5000...");
  });
});
