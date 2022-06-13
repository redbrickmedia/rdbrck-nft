import tw from "tailwind-styled-components";
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useChainId,
  useEditionDrop,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Buttons = (props) => {
  const [totalSupply, setTotalSupply] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [isConnected, setConnected] = useState(false);
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const editionDrop = useEditionDrop(
    "0xB636C1a63C3b092a7c74304B1947B0162D08a1e4"
  );
  console.log(address);

  const chainId = useChainId();
  console.log(chainId);

  const connected = async () => {
    if (connectWithMetamask && address) {
      setConnected(true);
    }
  };

  const mint = async (props) => {
    if (editionDrop && address) {
      setInProgress(true);
      const tx = await editionDrop.claimTo(address, props.id, 1);
      console.log(tx);
      console.log(props.id);
      setInProgress(false);
      setCompleted(true);
      toast.success("Mint Succesful!");
    }
  };

  const viewOpensea = () => {
    const url = "https://testnets.opensea.io/collection/1-year-anniversary";
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
          <>
            {completed ? (
              <FilledButton onClick={viewOpensea}>View on OpenSea</FilledButton>
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
            <UnfilledButton onClick={disconnect} disabled={inProgress}>
              Disconnect
            </UnfilledButton>
          </>
        ) : (
          <FilledButton onClick={connectWithMetamask}>
            Connect Wallet
          </FilledButton>
        )}
      </ButtonContainer>
    </div>
  );
};

export default Buttons;

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
