const {ethers} = require("hardhat")

async function main() {
  const HouseNFT = await ethers.getContractFactory("HouseNFT")
  const houseNFT = await HouseNFT.deploy("HouseNFT", "HNFT")

  await houseNFT.deployed() 
  console.log(`Contract successfully deployed to ${houseNFT.address}`);


  const newItemId = await houseNFT.mint("https://ipfs.io/ipfs/QmavFvczV83KbwS2gN8b8DEaRafi2ph796bZmX8i5WwjjK")
      console.log(`NFT minted successfully::${newItemId}`);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
