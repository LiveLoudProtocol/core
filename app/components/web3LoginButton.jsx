"use client";
import * as React from "react";

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
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <button className="w-72 pr-2 max-w-xs font-bold shadow-sm rounded-xl py-2 bg-white text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out hover:outline  hover:shadow focus:shadow-sm focus:shadow-outline">
        <div className="bg-white p-1 rounded-full">
          <img className="w-6 h-6" src="/metamask.svg" />
        </div>
        <span className="ml-1 bg-white">Log In With MetaMask</span>
      </button>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            web2 modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </div>
  );
}
