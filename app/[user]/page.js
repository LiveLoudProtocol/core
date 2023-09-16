"use client";
import { useSession } from "next-auth/react";
import { isMobile } from "mobile-device-detect";
import useMetaMask from "app/hooks/useMetaMask";
import SideBar from "app/components/sideBar";
import { useEffect } from "react";

export default function page() {
  const { status } = useSession();
  const { status: web3Status } = useMetaMask();

  useEffect(() => {
    const container = document.getElementById("main");
    container.addEventListener("wheel", handleScroll);
    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    const container = document.getElementById("main");
    const isScrollable = container.scrollHeight > container.clientHeight;

    if (isScrollable) {
      container.scrollTop += e.deltaY;
    }
  };

  return (
    <div id="main" className="overflow-y-auto h-screen">
      {/* <Navbar /> */}

      {/* {isMobile ? "this is mobile phone" : "this is not mobile phone"} */}
      {/* <SideBar/> */}

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Are You Logged In With Google? {status}
        </h1>
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Are You Logged In With Web3? {web3Status}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Are You Logged In With Google? {status}
        </h1>
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Are You Logged In With Web3? {web3Status}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Are You Logged In With Google? {status}
        </h1>
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Are You Logged In With Web3? {web3Status}
        </h1>
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
