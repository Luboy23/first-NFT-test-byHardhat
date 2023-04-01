const {ethers} = require("hardhat")
const houseNFTJSON =require("../artifacts/contracts/HouseNFT.sol//HouseNFT.json")

async function main() {
    const abi = houseNFTJSON.abi
    const provider = new ethers.providers.AlchemyProvider("mumbai", process.env.MUMBAI_PROJECT_ID)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    const signer = wallet.connect(provider)
    const houseNFT = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer) 
   await houseNFT.mint('https://ipfs.io/ipfs/QmavFvczV83KbwS2gN8b8DEaRafi2ph796bZmX8i5WwjjK')
   console.log("MFT minted!");
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exit(1)
});
