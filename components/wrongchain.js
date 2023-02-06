import tw from "tailwind-styled-components";
import { useMetamask } from "@thirdweb-dev/react";

const Wrongchain = () => {
  const connectWithMetamask = useMetamask();
  const changeNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${Number(137).toString(16)}` }],
        });
      } catch (error) {
        if (error.code === 4902) {
          try {
            console.log("You need to add the Polygon network");
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${Number(137).toString(16)}`,
                  chainName: "Polygon",
                  rpcUrls: ["https://polygon-rpc.com/"],
                  nativeCurrency: {
                    name: "MATIC",
                    symbol: "MATIC",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://polygonscan.com/"],
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
      <div className="grid gap-5">
        <Title>Last step:</Title>
        <p className="leading-relaxed font-[300] text-[#D8D8D8] 3xl:text-2xl 3xl:leading-relaxed">
          Redbrick NFTs are built on the Polygon blockchain, so we&apos;ll need
          to add that network to your wallet. Please click the button below to
          connect to Polygon.
        </p>
        <ChangeButton
          onClick={() => {
            changeNetwork();
            connectWithMetamask();
          }}
        >
          Connect to Polygon
        </ChangeButton>
      </div>
    </TitleContainer>
  );
};

export default Wrongchain;

const ChangeButton = tw.button`
tracking-[2px]
text-sm
3xl:text-lg
uppercase
rounded-[100px]
  bg-white
  rounded-full
  transition
  duration-600
  hover:scale-105
  text-black
  mt-[20px]
  px-7
  mt-2
  w-fit
  h-10
  3xl:h-16
  shadow-md
  `;

const Title = tw.h2`
  text-3xl
  3xl:text-5xl
  font-semibold
  tracking-wide
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
  3xl:p-12
  `;
