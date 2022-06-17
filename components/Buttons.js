import tw from "tailwind-styled-components";
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useEditionDrop,
  useChainId,
  getTotalCount,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrongchain from "./wrongchain";

const Buttons = (props) => {
  const chainId = useChainId();
  console.log(chainId);
  // const [totalSupply, setTotalSupply] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  // const [isConnected, setConnected] = useState(false);
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const editionDrop = useEditionDrop(
    "0xB636C1a63C3b092a7c74304B1947B0162D08a1e4"
  );
  console.log(address);

  // const connected = async () => {
  //   if (connectWithMetamask && address) {
  //     setConnected(true);
  //   }
  // };

  const mint = async () => {
    if (editionDrop && address) {
      console.log(props.id);
      setInProgress(true);
      // set a condition where if the txn doens't happen, in progress reverts back to false
      const tx = await editionDrop.claimTo(address, props.id, 1);
      console.log(tx);
      setInProgress(false);
      setCompleted(true);
      toast.success("Mint Succesful!");
    }
  };

  const viewOpensea = () => {
    const url =
      "https://testnets.opensea.io/collection/{contract_address}/{props.id}";
    window.open(url, "_blank");
  };

  const startOver = () => {
    setCompleted(false);
    setInProgress(false);
    disconnect();
  };

  return (
    <div>
      <ButtonContainer className="gap-8">
        {address ? (
          chainId === 80001 ? (
            <Mint>
              <TitleContainer className="grid gap-6">
                <Title>{props.title}</Title>
                <h2 className="font-light">{props.des}</h2>
              </TitleContainer>
              <div className="flex gap-6">
                {completed ? (
                  <FilledButton onClick={viewOpensea}>
                    View on OpenSea
                  </FilledButton>
                ) : inProgress ? (
                  <div className="pt-4">
                    <ReactLoading
                      type="bubbles"
                      color="#FFFFFF"
                      height={30}
                      width={65}
                    />
                  </div>
                ) : (
                  <FilledButton disabled={inProgress} onClick={mint}>
                    <>Mint</>
                  </FilledButton>
                )}
                <UnfilledButton onClick={startOver} disabled={inProgress}>
                  Disconnect
                </UnfilledButton>
              </div>
            </Mint>
          ) : (
            <Wrongchain />
          )
        ) : (
          <Mint>
            <TitleContainer className="grid gap-6">
              <Title>{props.connect}</Title>
              <h2>{props.connectdes}</h2>
            </TitleContainer>
            <FilledButton onClick={connectWithMetamask}>
              Connect Wallet
            </FilledButton>
          </Mint>
        )}
      </ButtonContainer>
    </div>
  );
};

export default Buttons;

const Mint = tw.div`
  flex-col
  max-w-screen-sm
  mt-[-50px]
`;

const FilledButton = tw.button`
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
  `;

const UnfilledButton = tw(FilledButton)`
  bg-gray-100
  text-black
  hover:text-black
  `;

const ButtonContainer = tw.div`
  flex
  ml-20
  mt-6
  `;

const Title = tw.h2`
  uppercase
  text-3xl
  font-bold
  mt-2
`;
const TitleContainer = tw.div`
  text-white
  max-w-screen-lg
  w-full
`;
