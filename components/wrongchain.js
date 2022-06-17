import tw from "tailwind-styled-components";

const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};

const Wrongchain = () => {
  const changeNetwork = async ({ networkName }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName],
          },
        ],
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleNetworkSwitch = async (networkName) => {
    await changeNetwork({ networkName });
  };

  return (
    <TitleContainer>
      <div className="grid gap-8">
        <Title>You are not connected to Polygon!</Title>
        <h2 className="font-light">
          Please select the button below to automatically connect to Polygon
          mainnet.
        </h2>
        <ChangeButton onClick={() => handleNetworkSwitch("mumbai")}>
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
