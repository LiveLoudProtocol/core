const resolver = {
    Query: {
      generateModuleCurrencyApprovalData: (parent, args) => {
        const { request } = args;
  
        // Call the function to generate approval data
        const { to, from, data } = generateModuleCurrencyApprovalData(request);
  
        return {
          to,
          from,
          data,
        };
      },
    },
  };
  
  
  function generateModuleCurrencyApprovalData(request) {
    const to = '0xRecipientAddress';
    const from = '0xSenderAddress';
    const data = '0xApprovalData';
  
    return {
      to,
      from,
      data,
    };
  }
  
  module.exports = resolver;
  