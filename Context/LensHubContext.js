import React,{useState,useEffect,useContext} from "react";
import { Web3Modal } from "@web3modal/react";
import {ethers} from "ethers";
import Router from "next/router";
import axios from "axios";
import {create as ipfsHttpClient} from "ipfs-http-client";


import {lensAddress,lensABI} from "./constant.js";

const fetchContract=(signerOrProvider) => new ethers.Contract(lensAddress,lensABI,signerOrProvider);

//connecting with smart contract
const connectingWithSmartContract=async()=>{
    try{
        const web3Modal=new Web3Modal();
        const connection=await web3Modal.connect();
        const provider=new ethers.providers.Web3Provider(connection);
        const signer=provider.getSigner();
        const contract=fetchContract(signer);
        return contract;
    }catch(error){
        console.log(error);
    }
}

export const LensHubContext=React.createContext();
// const data="mohan"
const checkContract=async()=>{
    const contract=await connectingWithSmartContract();
    console.log(contract);
}
export const LensHubProvider=(({children})=>{
    return (
        <LensHubContext.Provider value={{/* call here*/checkContract,}}>
            {children}
        </LensHubContext.Provider>
    )
})   