"use client";
import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useAccount } from "wagmi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Web3Model() {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({
          isConnected,
          isConnecting,
          show,
          hide,
          address,
          ensName,
          chain,
        }) => {
          return (
            <button
              className="w-72 pr-2 max-w-xs font-bold shadow-sm round-xl py-2 bg-white text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out hover:outline  hover:shadow focus:shadow-sm focus:shadow-outline"
              onClick={show}
              // style={yourButtonStyle}
            >
              <div className="bg-white p-1 round-full">
                <img className="w-6 h-6" src="/metamask.svg" />
              </div>
              <span className="ml-1 bg-white">
                {isConnected
                  ? address.slice(0, 4) +
                    "..." +
                    address.slice(address.length - 4)
                  : "Log In With MetaMask"}
              </span>
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
}
