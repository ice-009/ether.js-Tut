// 0x6fdad8c348f3d0877d95821dafa6c2415509fb7d
const {ethers}= require('ethers')
const providers= new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/14441feddcbc4a9080e3928d276aad9f`
)
// console.log(providers)
const walletAddress= '0x00f51013a485bc8a2e91e09a68e5a6412dd2783f';
const walletAbi= [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const contractInteraction= async()=>{
    const walletContracts= new ethers.Contract(walletAddress, walletAbi, providers)

    // const contractName= await walletContracts.getValue()
    // console.log(contractName);

    const num= await walletContracts.getValue();
    console.log(String(num))

    // const contractBalance= await walletContracts.contractBalance();
    // console.log(contractBalance)

    // const UserBalance = await walletContracts.accountBalance('0xaCf299096AfD31c664c1fE0EB90ad657450c85b0')
}
contractInteraction()