"use client";
import { useSession, signOut } from "next-auth/react";
import { Web3Button } from "@web3modal/react";
import Navbar from "../modules/home/components/Navbar";
import { useAccount } from "wagmi";

export default function page() {
  const { status, data } = useSession();
  const {
    account,
    isConnecting,
    isConnected,
    status: web3Status,
  } = useAccount();

  return (
    <div>
      <Navbar />

      <div className="flex flex-row items-center justify-center h-screen">
        <div className="w-[25%] h-screen min-h-screen "></div>
        <div className=""></div>
        <div className="w-[25%] h-screen min-h-screen"></div>
        {/* //main */}
        {/* trending */}
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Are You Logged In With Google? {status}
        </h1>
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Are You Logged In With Web3? {web3Status}
        </h1>
      </div>
    </div>
  );
}
