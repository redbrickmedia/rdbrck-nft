import tw from "tailwind-styled-components";


    // const changeNetwork = async () => {
    //   if (window.ethereum) {
    //     try {
    //       await window.ethereum.request({
    //         method: "wallet_switchEthereumChain",
    //         params: [{ chainId: REACT_APP_ACTIVE_CHAIN }], // chainId must be in hexadecimal numbers
    //       });
    //     } catch (error) {
    //       // This error code indicates that the chain has not been added to MetaMask
    //       // if it is not, then install it into the user MetaMask
    //       if (error.code === 4902) {
    //         try {
    //           console.log("ADD CHAIN");
    //           await window.ethereum.request({
    //             method: "wallet_addEthereumChain",
    //             params: [
    //               {
    //                 ...getActive().chainInfoForSwitching,
    //               },
    //             ],
    //           });
    //         } catch (addError) {
    //           console.error(addError);
    //         }
    //       }
    //       console.error(error);
    //     }
    //   }
    // };