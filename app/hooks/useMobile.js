import { useState, useEffect } from "react";

function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      // Define a breakpoint to determine if the screen is considered mobile
      const breakpoint = 768; // Adjust this value based on your design
      const isMobile = window.innerWidth < breakpoint;
      setIsMobile(isMobile);
    }

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

export default useMobile;
