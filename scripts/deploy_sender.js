const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const routerAddress = "0xaCdaBa07ECad81dc634458b98673931DD9d3Bc14"; 
    const linkAddress = "0x9870D6a0e05F867EAAe696e106741843F7fD116D";

    const Sender = await ethers.getContractFactory("Sender");
    const sender = await Sender.deploy(routerAddress, linkAddress);

    console.log("Sender contract deployed at:", sender.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
