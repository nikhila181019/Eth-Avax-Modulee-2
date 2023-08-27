# NikhilContract Metacrafter Calculator

This project represents a decentralized application (Calculator) that interfaces with the NikhilContract smart contract. The DApp offers functionalities for viewing the owner's name and balance, along with the capability to transfer ethers to the contract owner.

## Overview

The NikhilContract is developed utilizing the Hardhat framework and React library. It comprises a Solidity-based smart contract and a React frontend that delivers a user-friendly interface for interacting with the contract. The smart contract encompasses the logic for fetching the owner's name and balance, as well as enabling ether transfers to the owner. Meanwhile, the React frontend showcases the owner's details and furnishes a form to initiate transfers.

## Getting Started

### Installing

To download the project, you can clone the repository using the following command:

```
git clone https://github.com/Nikhil/Eth-Avax-Modulee2
```

After cloning the repository, navigate to the project's root directory.

### Executing program

To run the DApp, follow these steps:

1. Install the project dependencies by running the following command:

   ```
   npm install
   ```
2. Start a blockchain locally by running the command: 
   ```
   npx hardhat node
   ```

3. Deploy the NikhilContract smart contract by running the deployment script:

   ```
   npx hardhat run scripts/deploy.js --network localhost
   ```
4. Go to frontend directory by running the command:

   ```
   cd ./frontend
   ```
5. Install the project dependencies by running the following command:

   ```
   npm install
   ```
6. Start the React development server:

   ```
   npm start
   ```

   The Calculatpr will be accessible in your web browser at `http://localhost:3000`.

   

## Assistance

Should you encounter any challenges or have inquiries, you can refer to the project's documentation or seek assistance from the project contributors.

## Authors

- [Nikhil Agarwal](https://github.com/Nikhila181019)

## License

This code is released under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.
