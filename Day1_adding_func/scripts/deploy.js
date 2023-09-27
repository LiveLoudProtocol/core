// const main = async () => {
//   const profileImageFactory = await hre.ethers.getContractFactory(
//     'ProfileImageNfts',
//   )
//   const profileImageContract = await profileImageFactory.deploy()

//   // await profileImageContract.deployed()
//   // const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

//   console.log('Profile Image Minter deployed to:', profileImageContract.address)
// }

// ;(async () => {
//   try {
//     await main()
//     process.exit(0)
//   } catch (error) {
//     console.error(error)
//     process.exit(1)
//   }
// })()


const hre = require("hardhat");

async function main(){
  const liveloud =await hre.ethers.getContractFactory("liveloud");
  const x = await liveloud.deploy();

  await x.deployed();
  console.log(`deployed contract address are ${x.address}`);
}

main().catch((error)=>{
  console.error(error);
  process.exitCode=1;
});