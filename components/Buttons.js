import tw from "tailwind-styled-components";
import { useAddress, useEditionDrop, useChainId } from "@thirdweb-dev/react";
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
  // const disconnect = useDisconnect();
  const editionDrop = useEditionDrop(
    "0xEAbB004E555B2fb3071a8f76df31bFEE7a8bFA50"
  );

  console.log(address);
  console.log(props.id);

  // const { contract } = useContract(0xEAbB004E555B2fb3071a8f76df31bFEE7a8bFA50);
  // const { data: ownerBalance, isLoading, error } = useNFTBalance(contract?.nft, {address});


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

  // update target url to mainnet link
  const targetUrl = `https://testnets.opensea.io/assets/mumbai/0xEAbB004E555B2fb3071a8f76df31bFEE7a8bFA50/${props.id}`;

  return (
    <div>
      <ButtonContainer className="gap-8">
        {/* update chainId to 137 */}
        {chainId === 80001 ? (
          <Mint>
            <TitleContainer className="grid gap-6">
              <Title>{props.title}</Title>
              <h2 className="font-light">{props.des}</h2>
            </TitleContainer>
            <div className="flex gap-6">
              {completed ? (
                <a href={targetUrl} target="_blank" rel="noreferrer">
                  <button className="bg-white rounded-full transition duration-600 hover:scale-105 border-2 border-black text-black mt-[20px] py-3 px-7">
                    View on OpenSea
                  </button>
                </a>
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
                  Mint
                </FilledButton>
              )}
            </div>
          </Mint>
        ) : (
          <Wrongchain />
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
