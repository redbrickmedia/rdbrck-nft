import tw from "tailwind-styled-components";
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useEditionDrop,
  useChainId,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrongchain from "./wrongchain";

const Buttons = (props) => {
  const chainId = useChainId();
  console.log(chainId);
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const editionDrop = useEditionDrop(
    "0xB0861Ef3C80096c4434E027a4C650CC47D5614C0"
  );
  console.log(address);
  console.log(props.id);

  // const connected = async () => {
  //   if (connectWithMetamask && address) {
  //     setConnected(true);
  //   }
  // };

  const mint = async () => {
    if (editionDrop && address) {
      setInProgress(true);
      // set a condition where if the txn doens't happen, in progress reverts back to false
      const tx = await editionDrop.claimTo(address, props.id, 1);
      console.log(tx);
      setInProgress(false);
      setCompleted(true);
      toast.success("Mint Succesful!");
    }
  };

  const startOver = () => {
    setCompleted(false);
    setInProgress(false);
    disconnect();
  };

  //check if address has already minted, if they have show toast error message
  // const { data: claimIneligibilityReasons, isLoading, error } =
  // useClaimIneligibilityReasons("0xB0861Ef3C80096c4434E027a4C650CC47D5614C0", {quantity: 1}, [data.id]);

  const targetUrl = `https://testnets.opensea.io/assets/mumbai/0xB0861Ef3C80096c4434E027a4C650CC47D5614C0/${props.id}`;

  return (
    <div>
      <ButtonContainer className="gap-8">
        {
          // //1 start
          address ? (
            // update chainId to 137 for mainnet
            chainId === 80001 ? (
              //2 start
              <Mint>
                <TitleContainer className="grid gap-6">
                  <Title>{props.title}</Title>
                  <h2 className="font-light">{props.des}</h2>
                </TitleContainer>
                <div className="flex gap-6">
                  {completed ? (
                    // 3 start
                    <a href={targetUrl} target="_blank">
                      <button className="bg-white rounded-full transition duration-600 hover:scale-105 border-2 border-black text-black mt-[20px] py-3 px-7">
                        View on OpenSea
                      </button>
                    </a>
                  ) : //3 end
                  inProgress ? (
                    //4 start
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
                    //4 end
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
            //2 end
            <Mint>
              <TitleContainer className="grid gap-6">
                <Title>{props.connect}</Title>
                <h2>{props.connectdes}</h2>
              </TitleContainer>
              <FilledButton onClick={connectWithMetamask}>
                Connect Wallet
              </FilledButton>
            </Mint>
            // 1 end
          )
        }
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
  shadow-md
  hover:shadow-gray-600
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
