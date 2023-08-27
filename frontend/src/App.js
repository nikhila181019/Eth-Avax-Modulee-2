import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import './App.css';

import CalculatorJSON from "./contracts/NikhilCalculator.sol/NikhilCalculator.json";
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const CalculatorABI = CalculatorJSON.abi;

function App() {
  const [result, setResult] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerAdd, setOwnerAdd] = useState("");

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);

          const _provider = new ethers.providers.Web3Provider(window.ethereum);
          // const _provider = new ethers.providers.JsonRpcProvider();
          await _provider.ready;
          const signer = _provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            CalculatorABI,
            signer
          );
          setContract(contract);

          const ownerName = await contract.ownerName();
          setOwnerName(ownerName);
          const ownerAdd = await contract.ownerAddress();
          setOwnerAdd(ownerAdd);

          const result = await contract.result();
          setResult(result.toString());
        }
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    }
  };

  const handleAdd = async () => {
    try {
      if (contract && window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const resultTx = await contract.add(num1, num2, {
          value: ethers.utils.parseEther("1"),
        });

        setResult("Transaction sent. Waiting for confirmation...");

        // Wait for the transaction to be mined and get the transaction receipt
        const receipt = await resultTx.wait();

        // Get the return value from the emitted event
        if (receipt && receipt.events && receipt.events[0]) {
          const resultValue = receipt.events[0].args[0];
          setResult(resultValue.toString());
        } else {
          setResult("Transaction failed");
        }
      }
    } catch (error) {
      console.error(error);
      setResult("Transaction failed");
    }
  };

  const handleSubtract = async () => {
    try {
      if (contract && window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const resultTx = await contract.subtract(num1, num2, {
          value: ethers.utils.parseEther("1"),
        });

        setResult("Transaction sent. Waiting for confirmation...");

        // Wait for the transaction to be mined and get the transaction receipt
        const receipt = await resultTx.wait();

        // Get the return value from the emitted event
        if (receipt && receipt.events && receipt.events[0]) {
          const resultValue = receipt.events[0].args[0];
          setResult(resultValue.toString());
        } else {
          setResult("Transaction failed");
        }
      }
    } catch (error) {
      console.error(error);
      setResult("Transaction failed");
    }
  };

  const handleMultiply = async () => {
    try {
      if (contract && window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const resultTx = await contract.multiply(num1, num2, {
          value: ethers.utils.parseEther("1"),
        });

        setResult("Transaction sent. Waiting for confirmation...");

        // Wait for the transaction to be mined and get the transaction receipt
        const receipt = await resultTx.wait();

        // Get the return value from the emitted event
        if (receipt && receipt.events && receipt.events[0]) {
          const resultValue = receipt.events[0].args[0];
          setResult(resultValue.toString());
        } else {
          setResult("Transaction failed");
        }
      }
    } catch (error) {
      console.error(error);
      setResult("Transaction failed");
    }
  };
  const handleDivide = async () => {
    try {
      if (contract && window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const resultTx = await contract.divide(num1, num2, {
          value: ethers.utils.parseEther("1"),
        });

        setResult("Transaction sent. Waiting for confirmation...");

        // Wait for the transaction to be mined and get the transaction receipt
        const receipt = await resultTx.wait();

        // Get the return value from the emitted event
        if (receipt && receipt.events && receipt.events[0]) {
          const resultValue = receipt.events[0].args[0];
          setResult(resultValue.toString());
        } else {
          setResult("Transaction failed");
        }
      }
    } catch (error) {
      console.error(error);
      setResult("Transaction failed");
    }
  };

  useEffect(() => {
    connectToMetaMask();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>MetaCrafter Calculation App</h1>
      </div>
      {isConnected ? (
        <div className="calculator">
          <h2>Owner's Address: {ownerAdd}</h2>
          <h2>Owner's Name: {ownerName}</h2>
          <p>Connected Account: {account}</p>
          <label>Number 1:</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <label>Number 2:</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <br />
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSubtract}>Subtract</button>
          <button onClick={handleMultiply}>Multiply</button>
          <button onClick={handleDivide}>Divide</button>
          <br />
          <p className="result">Result: {result}</p>
        </div>
      ) : (
        <button className="connect-button" onClick={connectToMetaMask}>Connect to MetaMask</button>
      )}
    </div>
  );
}

export default App;
