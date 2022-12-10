import { ethers } from "ethers";
import web3modal from 'web3modal';

import { chatAppAddress, ChatAppABI } from "../Context/constants";

//check wallet function
export const ChechIfWalletConnected = async () => {
    try {
        if(!window.ethereum) return console.log("install Metamask");

        const accounts = await window.ethereum.requets({
            method : "eth_accounts",
        })
        const firstAccount = accounts[0]
        return firstAccount;
    } catch (error) {
       
        
    }
} 

//connect wallet function
export const connectWallet = async () => {
    try {
        if (!window.ethereum) return console.log("install Metamask");

        const accounts = await window.ethereum.requets({
          method: "eth_requestAcoounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
        
    } catch (error) {
        console.log(error)
    }

}

