import { ethers } from "ethers";

const ABI = [];
const contractAddress = "0xF6DFbB281cC9c5286d64dC28B054A732443fcD39";

const provider = new ethers.JsonRpcProvider(
  "https://bsc-dataseed1.binance.org/"
);
const contract = new ethers.Contract(contractAddress, ABI, provider);
const value = await contract.symbol();
console.log({ value });
