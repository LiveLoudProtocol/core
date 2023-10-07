import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Box, Divider, Fade, Popper } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
function useMetaMask() {
  const [provider, setProvider] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [status, setStatus] = useState("disconnected");
  const [currentAccount, setCurrentAccount] = useState(null);

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const getBalance = async () => {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed.");
    }

    const ethProvider = new ethers.providers.Web3Provider(window.ethereum);

    if (currentAccount) {
      try {
        // Get the balance in Ether (ETH)
        const balance = await ethProvider.getBalance(currentAccount);
        return ethers.utils.formatEther(balance); // Convert to a readable format (in ETH)
      } catch (error) {
        throw new Error("Error fetching balance: " + error.message);
      }
    }
  };

  const balance = getBalance();

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Function to handle accounts changes
      function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
          // MetaMask is locked or the user has not connected any accounts.
          console.log("Please connect to MetaMask.");
          setCurrentAccount(null);
        } else if (accounts[0] !== currentAccount) {
          // Reload your interface with accounts[0].
          setCurrentAccount(accounts[0]);
        }
      }

      // Initial check for accounts
      window.ethereum
        .request({ method: "eth_accounts" })
        .then(handleAccountsChanged)
        .catch((err) => {
          console.error(err);
        });

      // Add an event listener for accounts changes
      window.ethereum.on("accountsChanged", handleAccountsChanged);

      // Set the initial account value
      setCurrentAccount(window.ethereum.selectedAddress);
    } else {
      console.log("MetaMask is not installed.");
    }
  }, []);

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      const ethProvider = new ethers.providers.Web3Provider(window.ethereum);

      // Request access to MetaMask account
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(() => {
          setProvider(ethProvider);
          setStatus("connected");
        })
        .catch((error) => {
          console.error(error);
          setStatus("disconnected");
        });
    } else {
      setStatus("notInstalled");
    }
  }, []);

  useEffect(() => {
    if (provider) {
      // Fetch the user's Ethereum address
      provider
        .getSigner()
        .getAddress()
        .then((address) => {
          setUserAddress(address);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [provider]);

  const connectToMetaMask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(() => {
          setStatus("connected");
        })
        .catch((error) => {
          console.error(error);
          setStatus("disconnected");
        });
    }
  };

  const handleDisconnect = () => {
    if (window.ethereum) {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged); // Remove accountsChanged event listener
    }
    setUserAddress(null);
    setProvider(null);
    setStatus("disconnected");
  };

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      // MetaMask account disconnected, clear the user's data
      setUserAddress(null);
      setProvider(null);
      setStatus("disconnected");
    }
  };

  console.log(status);

  const connectWallet = () => {
    return (
      <div>
        <button
          onClick={status === "disconnected" ? connectToMetaMask : handleClick}
          className="w-72 pr-2 max-w-xs font-bold shadow-sm round-xl py-2 bg-white text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out hover:outline  hover:shadow focus:shadow-sm focus:shadow-outline"
        >
          <div className="bg-white p-1 round-full">
            <img className="w-6 h-6" src="/metamask.svg" alt="MetaMask" />
          </div>
          <span className="ml-1 bg-white">
            {status === "disconnected"
              ? "Log In With MetaMask"
              : currentAccount.slice(0, 6) +
                "..." +
                currentAccount.slice(currentAccount.length - 4)}
          </span>
        </button>
        {status === "connected" && (
          <Popper
            className="w-72"
            sx={{ borderRadius: "20px" }}
            id={id}
            open={open}
            anchorEl={anchorEl}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        src="/eth.webp"
                        className="round-full w-9 h-9 mb-2"
                      />
                      <p className="font-bold">
                        {currentAccount.slice(0, 4) +
                          "..." +
                          currentAccount.slice(currentAccount.length - 2)}
                      </p>
                    </div>
                    <div className="flex item-center justify-center border round-full p-2 m-2 text-center">
                      <span className="w-4 h-4 self-center bg-green-500 round-full mr-2"></span>
                      <span>{status}</span>
                    </div>
                  </div>
                  <Divider />

                  <div className="flex px-1 mt-1 items-center justify-between">
                    <div className="flex gap-1">
                      <img
                        className="w-6 h-6 round-full bg-clip-content "
                        src="/eth.webp"
                      />
                      <span className="font-bold">
                        {balance ? balance : 0} ETH
                      </span>
                    </div>

                    <div
                      onClick={handleDisconnect}
                      className=" p-1 transition-all ease-in duration-[25ms] hover:text-opacity-100 hover:bg-gray-400 round-lg hover:opacity-80 cursor-pointer flex flex-col items-center justify-center"
                    >
                      <LogoutIcon />
                      <p>Disconnect</p>
                    </div>
                  </div>
                </Box>
              </Fade>
            )}
          </Popper>
        )}
      </div>
    );
  };

  return { connectWallet, currentAccount, getBalance, status };
}

export default useMetaMask;
