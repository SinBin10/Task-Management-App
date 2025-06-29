const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  confirmPassword: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
// collection name --> users
