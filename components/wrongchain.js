import tw from "tailwind-styled-components";
import { useMetamask } from "@thirdweb-dev/react";

const Wrongchain = () => {
  const connectWithMetamask = useMetamask();
  const changeNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          //change (80001) to (137) for mainnet deployment
          params: [{ chainId: `0x${Number(80001).toString(16)}` }],
        });
      } catch (error) {

        if (error.code === 4902) {
          try {
            console.log("You need to add the Polygon network");
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${Number(80001).toString(16)}`,
                  chainName: "Polygon Mumbai",
                  rpcUrls: [
                    //if issues arise with the rpc url here, replace with https://polygon-rpc.com/. this is a public rpc endpoint.
                    "https://rpc-mumbai.maticvigil.com/v1/d20066f23fe6613c8f530422eb27b2bc80e5fe6e",
                  ],
                  nativeCurrency: {
                    name: "MATIC",
                    symbol: "MATIC",
                    decimals: 18,
                  },
                  // update block explorer to mainnet
                  blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                },
              ],
            });
          } catch (addError) {
            console.error(addError);
          }
        }
        console.error(error);
      }
    }
  };

  return (
    <TitleContainer>
      <div className="grid gap-8">
        <Title>You are not connected to Polygon!</Title>
        <h2 className="font-light">
          Please select the button below to automatically connect to Polygon
          mainnet.
        </h2>
        <ChangeButton
          onClick={() => {
            changeNetwork();
            connectWithMetamask();
          }}
        >
          Go to Polygon
        </ChangeButton>
      </div>
    </TitleContainer>
  );
};

export default Wrongchain;

const ChangeButton = tw.button`
  bg-white
  rounded-full
  transition
  duration-600
  hover:scale-105
  border-2
  border-black
  text-black
  mt-[20px]
  py-3
  px-7
  mt-2
  w-fit
  shadow-md
  hover:shadow-gray-600
  `;

const Title = tw.h2`
  uppercase
  text-3xl
  font-bold
  mt-2
  `;
const TitleContainer = tw.div`
  ml-18
  text-white
  max-w-screen-lg
  w-full
  flex
  flex-col
  max-w-screen-sm
  mt-[-50px]
  `;
