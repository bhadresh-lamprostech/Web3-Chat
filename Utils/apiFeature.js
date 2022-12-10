import { ethers } from "ethers";
import web3modal from 'web3modal';

import { chatAppAddress, chatAppABI } from "../Context/constants";

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

//fetch contract
const fetchContract = (signerOrProvider) => new ethers.Contract(chatAppABI, chatAppAddress, signerOrProvider)

export const connectingWithWallet = async () => {

    try {
        const web3modal = new web3modal();
        const connection = await web3modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log(error)
    }
}


//convert time 

export const  converTime  = (time) => {
    const newTime = new Date(time.toNumber());
    const realTime = newtime.getHours(); + "/" + newTime.getMinutes() + "/" + newTime.getSeconds() + 
    " Date:" +
    newTime.getDate() + "/" +
    (newtime.getMont() + 1) + "/" +
    newTime.getFullYear();

}