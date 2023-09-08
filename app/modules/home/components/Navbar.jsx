"use client";
import React from "react";
import { Web3Button } from "@web3modal/react";

export default function Navbar() {
  return (
    <nav className="p-4 flex flex-wrap justify-between items-center">
      <div className=" text-black text-xl font-semibold">LiveLoud</div>
      <Web3Button />
    </nav>
  );
}
