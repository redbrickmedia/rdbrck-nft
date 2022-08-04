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
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  const address = useAddress();
  const editionDrop = useEditionDrop(
    "0x03DF2c5E067ff0e24c47386A8e5821560Dcc1e53"
  );


  console.log(address);
  console.log(props.id);

  const checkBalance = async () => {
    try {
      const balance = await editionDrop.balanceOf(address, props.id);
      if (balance != 0) {
        setHasClaimedNFT(true);
        console.log("You own this Redbrick NFT already!");
      } else {
        setHasClaimedNFT(false);
        console.log("You don't own this NFT yet!");
      }
    } catch (error) {
      setHasClaimedNFT(false);
      console.error("Failed to get balance", error);
    }
  };

  useEffect(() => {
    if (!address) {
      return;
    }

    checkBalance();
  }, [address, editionDrop]);

  const mint = async () => {
    if (editionDrop && address) {
      setInProgress(true);
      const tx = await editionDrop.claimTo(address, props.id, 1);
      console.log(tx);
      setInProgress(false);
      setCompleted(true);
      toast.success("Mint Succesful!");
    }
  };

  const targetUrl = `https://testnet.rarible.com/token/polygon/0x03df2c5e067ff0e24c47386a8e5821560dcc1e53:${props.id}`;

  return (
    <div>
      <ButtonContainer className="gap-8">
        {chainId === 80001 ? (
          <Mint>
            <div className="flex gap-6">
              {completed ? (
                <TitleContainer className="grid gap-6">
                  <Title>{props.nexttitle}</Title>
                  <ul className="list-disc ml-6 leading-relaxed font-[300] text-[#D8D8D8] 3xl:text-2xl 3xl:leading-relaxed">
                    <li>
                      Share it by posting the file or the listing URL from
                      OpenSea to your social networks like LinkedIn
                    </li>
                    <li>
                      View your NFTs on OpenSea by clicking the button below
                    </li>
                    <li>
                      You can visit{" "}
                      <a
                        target="_blank"
                        href="https://ethereum.org/en/nft/"
                        rel="noopener noreferrer"
                      >
                        <u>here</u>{" "}
                      </a>{" "}
                      to learn more about NFTs
                    </li>
                    <li>
                      If you&apos;d like to view our smart contract you can see
                      it on Polyscan{" "}
                      <a
                        target="_blank"
                        href="https://mumbai.polygonscan.com/address/0x03DF2c5E067ff0e24c47386A8e5821560Dcc1e53"
                        rel="noopener noreferrer"
                      >
                        <u>here</u>
                      </a>
                    </li>
                  </ul>
                  <a href={targetUrl} target="_blank" rel="noreferrer">
                    <ViewButton>View on Rarible</ViewButton>
                  </a>
                </TitleContainer>
              ) : inProgress ? (
                <TitleContainer className="grid gap-6">
                  <Title>{props.title}</Title>
                  <h2 className="leading-relaxed font-[300] text-[#D8D8D8] pr-10 3xl:text-2xl 3xl:leading-relaxed">
                    {props.des}
                  </h2>
                  <div className="pt-4">
                    <ReactLoading
                      type="bubbles"
                      color="#FFFFFF"
                      height={30}
                      width={65}
                    />
                  </div>
                </TitleContainer>
              ) : hasClaimedNFT ? (
                <TitleContainer className="grid gap-6">
                  <Title>{props.nexttitle}</Title>
                  <ul className="list-disc ml-6 leading-relaxed font-[300] text-[#D8D8D8] 3xl:text-2xl 3xl:leading-relaxed">
                    <li>
                      Share it by posting the file or the listing URL from
                      OpenSea to your social networks like LinkedIn
                    </li>
                    <li>
                      View your NFTs on OpenSea by clicking the button below
                    </li>
                    <li>
                      You can visit{" "}
                      <a
                        target="_blank"
                        href="https://ethereum.org/en/nft/"
                        rel="noopener noreferrer"
                      >
                        <u>here</u>{" "}
                      </a>{" "}
                      to learn more about NFTs
                    </li>
                    <li>
                      If you&apos;d like to view our smart contract you can see
                      it on Polyscan{" "}
                      <a
                        target="_blank"
                        href="https://mumbai.polygonscan.com/address/0x6ce3a1e56BDeDF0D2463eD5B90D954a72C2e5c5B"
                        rel="noopener noreferrer"
                      >
                        <u>here</u>
                      </a>
                    </li>
                  </ul>
                  <div className="flex gap-8">
                    <UnfilledButton>You already own this NFT!</UnfilledButton>
                    <a href={targetUrl} target="_blank" rel="noreferrer">
                      <ViewButton>View on Rarible</ViewButton>
                    </a>
                  </div>
                </TitleContainer>
              ) : (
                <TitleContainer className="grid gap-6">
                  <Title>{props.title}</Title>
                  <h2 className="leading-relaxed font-[300] text-[#D8D8D8] 3xl:text-2xl 3xl:leading-relaxed">
                    {props.des}
                  </h2>
                  <FilledButton
                    className="w-40"
                    disabled={inProgress}
                    onClick={mint}
                  >
                    Mint
                  </FilledButton>
                </TitleContainer>
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
uppercase
tracking-[2px]
text-sm
bg-white
rounded-[100px]
transition
duration-600
hover:scale-105
text-black
mt-[20px]
px-4
h-10
  `;

const ViewButton = tw.button`
uppercase
tracking-[2px]
text-xs
3xl:text-xl
bg-white
rounded-[100px]
transition
duration-600
hover:scale-105
text-black
mt-[20px]
px-4
py-3
text-center
`;

const UnfilledButton = tw.div`
  uppercase
  tracking-[2px]
  text-xs
  3xl:text-xl
  bg-[#202020]
  rounded-[100px]
  text-[#989898]
  mt-[20px]
  py-3
  px-4
  text-center
`;

const ButtonContainer = tw.div`
  flex
  mt-6
  `;

const Title = tw.h2`
3xl:text-5xl
  text-3xl
  font-bold
  mt-2
`;
const TitleContainer = tw.div`
py-16
  text-white
  max-w-screen-lg
  w-full
`;
