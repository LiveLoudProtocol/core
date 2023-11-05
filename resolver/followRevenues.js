// resolver.js

const resolver = {
    Query: {
      followRevenues: (parent, args) => {
       
        const fakeRevenues = [
          {
            total: {
              asset: {
                type: "Erc20",
                name: "FakeToken",
                symbol: "FT",
              },
              value: 1000,
              rate: {
                asset: {
                  type: "Fiat",
                  name: "US Dollar",
                  symbol: "USD",
                },
                value: 10,
              },
            },
          },
          // Add more revenue objects if needed
        ];
        
        return {
          revenues: fakeRevenues,
        };
      },
    },
  };
  
  module.exports = resolver;
  