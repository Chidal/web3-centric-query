const ethers = require('ethers');

// Function to format an Ethereum address
const formatAddress = (address) => {
  try {
    return ethers.utils.getAddress(address);
  } catch (error) {
    console.error('Invalid address:', address);
    return null;
  }
};

// Function to format Ether values
const formatEther = (value) => {
  return ethers.utils.formatEther(value);
};

module.exports = {
  formatAddress,
  formatEther,
};