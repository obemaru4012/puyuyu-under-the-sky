require("dotenv").config();

module.exports = config = {
  user: process.env.BLSK_USER,
  secretToken: process.env.SECERT_KEY,
  jwtToken: process.env.JWT_TOKEN,
  executionType: process.env.EXECUTION_TYPE,
};
