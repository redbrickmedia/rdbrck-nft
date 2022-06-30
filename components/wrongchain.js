import tw from "tailwind-styled-components";

const Wrongchain = () => {
  const changeNetwork = async () => {
    // if wallet is connected, change detected network to {params}
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${Number(80001).toString(16)}` }],
        });
      } catch (error) {
        // this error indicates that metamask doesn't recognize the dAPP chainId
        // if the wallet doens't recogize it, then install it into MetaMask for the user
        if (error.code === 4902) {
          try {
            // change log to "you need to add Polygona mainnet"
            console.log("You need to add the Mumbai testnet");
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${Number(80001).toString(16)}`,
                  chainName: "Polygon Mumbai",
                  rpcUrls: [
                    "https://speedy-nodes-nyc.moralis.io/6bd481125fcc3c18edbefb62/polygon/mumbai",
                  ],
                  nativeCurrency: {
                    name: "MATIC",
                    symbol: "MATIC",
                    decimals: 18,
                  },
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
        <ChangeButton onClick={() => changeNetwork()}>
          Change network
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
