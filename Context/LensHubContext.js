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

const connectWallet=async()=>{
    try {
        if(!window.ethereum) return console.log("Install Metamask");

        const accounts=await window.ethereum.request({method: "eth_requestAccounts",});
        setCurrentAccount(account[0]);
        // window.location.reload();
    } catch (error) {
        console.log("Error while connecting to wallet");
    }
};

const uploadToIPFS=async(file)=>{
    try {
        const added=await client.add({content:file});
        const url=`${subdomain}/ipfs/${added.path}`;
        return url;
    } catch (error) {
        console.log("Error while uploading to ipfs",(error));
    }
};


const createNFT=async(name,price,image,description,router)=>{


        if(!name || !description || !price || !image)
            return console.log('data Missing');

        const data=JSON.stringify({name,description,image});

        try {
            const added=await client.add(data);

            const url=`https://liveloud.infura-ipfs.io/ipfs/${added.path}`;

            await createSale(url,price);
            router.push("/searchPage");

        }catch (error) {
                console.log("Error while creating nft");
            }
        
        

};


const createSale=async(url,formInputPrice,isReselling,id)=>{
    try {
        const price=ethers.utils.parseUnits(formInputPrice,"ether");
        const contract=await connectingWithSmartContract();
        const listingPrice=await contract.getListingPrice();

        const transaction=!isReselling ? await contract.createToken(url,price,{value:listingPrice.toString()})
        : await contract.reSellToken(url,price,{
            value: listingPrice.toString(),
        });

        await transaction.wait();
        // console.log(transaction);
    } catch (error) {
        console.log("error while selling our NFTs");
    }
}

const fetchNFTs=async()=>{
    try {
        const provider=new ethers.providers.JsonRpcProvider();
        const contract=fetchContract(provider);
        const data=await contract.fetchMarketItem();

        const items=await Promise.all(
            data.map(async({tokenId,seller,owner,price: unformattedPrice})=>{
                const tokenURI=await contract.tokenURI(tokenId);

                const {
                    data:{image,name,description},
                }=await axios.get(tokenURI);

                const price=ethers.utils.formatUnits(
                    unformattedPrice.toString(),
                    "ether"
                );
                return {
                    price,tokenId:tokenId.toNumber(),
                    seller,
                    owner,
                    image,name,
                    description,
                    tokenURI,
                };

            })
        );
        return items;
    } catch (error) {
        console.log("Error while fetchoing with NFTs")
    }
}

useEffect(()=>{
    fetchNFTs();
},[]);

const fetchMyNFTsOrListedNFTs=async(type)=>{
    try {
        const contract=await connectingWithSmartContract();

        const data=type=="fetchItemsListed"? await contract.fetchItemsListed()
        : await contract.fetchMyNFTs();

        const items=await Promise.all(
            data.map(async ({tokenId,seller,owner,price:unformattedPrice})=>{
                const tokenURI=await contract.tokenURI(tokenId); 
                const {
                    data:{image,name,description},
                }=await axios.get(tokenURI);
                const price =ethers.utils.formatUnits(
                    unformattedPrice.toString(),
                    "ether"
                );
                return {
                    price,
                    tokenId:tokenId.toNumber(),
                    seller,
                    owner,image,name,description,tokenURI,
                };
            })
        );
        return items;
    } catch (error) {
        console.log("Not able to fetch the NFT from it");
    }
}

useEffect(()=>{
    fetchMyNFTsOrListedNFTs();
},[]);


const buyNFT = async(nft)=>{
    try {
        const contract=await connectingWithSmartContract();
        const price=ethers.utils.parseUnits(nft.price.toString(),"ethers");

        const transaction=await contract.createMarketSale(nft.tokenid,{value:price,});
        await transaction.wait();
        router.push("/author");
    } catch (error) {
        console.log("Error while buyingt nft");
    }
}

return (<TwitterContext.Provider value={{checkIfWalletConnected,connectWallet,uploadToIPFS,createNFT,fetchNFTs,fetchMyNFTsOrListedNFTs,buyNFT,createSale,currentAccount,titleData,}}>{children}</TwitterContext.Provider>);

