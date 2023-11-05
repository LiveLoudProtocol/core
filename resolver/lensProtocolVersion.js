const resolver = {
    Query: {
      lensProtocolVersion: () => {
        return getLensProtocolVersion();
      },
    },
  };
  
  function getLensProtocolVersion() {

    const version = "1.0.0"; 
  
    return version;
  }
  
  module.exports = resolver;
  