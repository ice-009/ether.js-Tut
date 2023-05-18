const {ethers}= require('ethers')
const provider= new ethers.providers.JsonRpcProvider(
    'https://mainnet.infura.io/v3/14441feddcbc4a9080e3928d276aad9f'
)
const querryBlockchain= async()=>{
    const block= await provider.getBlockNumber();
    console.log(block)
    const balance= await provider.getBalance('0xaCf299096AfD31c664c1fE0EB90ad657450c85b0')
    console.log(balance)
    const balanceether= ethers.utils.formatEther(balance);
    console.log(balanceether)
}

querryBlockchain();