const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { createToken, verifyToken } = require("./lib/auth");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connect (already working)
mongoose
  .connect("mongodb://127.0.0.1:27017/hr-management")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// ✅ root test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// ✅ JWT test route
app.get("/test-jwt", (req, res) => {
  const fakeUser = {
    _id: "12345",
    role: "user",
  };

  const token = createToken(fakeUser);

  res.json({
    message: "JWT generated successfully",
    token: token,
  });
});

// ✅ listen ALWAYS LAST
app.listen(5051, () => {
  console.log("Backend running on port 5051");
});