"use client";
import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import { ethers } from "ethers";

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

export default function OtherWeb3Model() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <div onClick={() => handleOpen}>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <button
        onClick={handleOpen}
        className="w-72 pr-2 max-w-xs font-bold shadow-sm rounded-xl py-2 bg-white text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out hover:outline  hover:shadow focus:shadow-sm focus:shadow-outline"
      >
        <div className="bg-white p-1 rounded-full">
          <img className="w-6 h-6" src="/wallet.svg" />
        </div>
        <span className="ml-1 bg-white">Connect Your Wallet</span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        </Box>
      </Modal>
    </div>
  );
}
