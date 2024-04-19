import { useEffect, useState } from "react";
import { ethers } from "ethers";
import ABI from "./abi";

const contractAddress = "0xF6DFbB281cC9c5286d64dC28B054A732443fcD39";

const useRead = () => {
  const [variable, setVariable] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const provider = new ethers.JsonRpcProvider(
      "https://bsc-dataseed1.binance.org/"
    );
    setProvider(provider);
    const contract = new ethers.Contract(contractAddress, ABI, provider);
    setContract(contract);
  }, []);

  const fetchVariable = async () => {
    if (!provider) return;
    const value = await contract.symbol();
    console.log({ value });
    setVariable(value);
  };

  return { variable, fetchVariable };
};

export default useRead;
