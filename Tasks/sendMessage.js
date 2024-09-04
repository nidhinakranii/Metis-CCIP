async function main() {
    const senderAddress = "0x2cbd4f0D148a38443945F3F79B497Ad0311F5e57"; // Replace with your Sender contract address
    const sender = await ethers.getContractAt("Sender", senderAddress);

    const destinationChainSelector = 16015286601757825753; // Replace with the destination chain selector for Sepolia
    const receiverAddress = "0x9dbCd9Bd80c8f80f452f29190CcfbF14D6865A1D"; // Replace with your Receiver contract address
    const textToSend = "Hello from Metis!";

    const tx = await sender.sendMessage(destinationChainSelector, receiverAddress, textToSend);
    await tx.wait();
    console.log("Message sent with tx:", tx.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
