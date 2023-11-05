const resolver = {
    Query: {
      lensTransactionStatus: (parent, args, context) => {
        // Retrieve the request object from the arguments
        const { request } = args;
  
        // Call a function to get the transaction status
        const transactionStatus = getLensTransactionStatus(request);
  
        return transactionStatus;
      },
    },
  };
  
