require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

