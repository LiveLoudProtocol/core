"use client";
import { useSession } from "next-auth/react";
import { isMobile } from "mobile-device-detect";
import useMetaMask from "app/hooks/useMetaMask";

export default function page() {
  const { status } = useSession();
  const { status: web3Status } = useMetaMask();

  return (
    <div>
      {/* <Navbar /> */}

      {isMobile ? "this is mobile phone" : "this is not mobile phone"}

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
