const ParseAddress = ( address ) => {
  // ...

  return address?.slice(0, 4) + "..." + address?.slice(address?.length - 4);
};
export default ParseAddress;
