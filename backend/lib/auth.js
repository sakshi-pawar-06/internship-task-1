const jwt = require("jsonwebtoken");

// secret key (abhi hardcoded, baad me env me daalenge)
const JWT_SECRET = "mysecretkey";

const createToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );
};

module.exports = {
  createToken,
};