import tw from "tailwind-styled-components";
import { useAddress, useEditionDrop, useChainId } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrongchain from "./wrongchain";
import React from "react";
import { useProgressContext } from "./../Context/ProgressContext";

const Buttons = (props) => {
  const chainId = useChainId();
  const [checkChainId, setCheckChainId] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  const address = useAddress();
  const editionDrop = useEditionDrop(
    "0x03DF2c5E067ff0e24c47386A8e5821560Dcc1e53"
  );
  const progressState = useProgressContext();

  // console.log(address);
  // console.log(props.id);
  // console.log(chainId);

  const checkBalance = async () => {
    try {
      const balance = await editionDrop.balanceOf(address, props.id);
      if (balance != 0) {
        setHasClaimedNFT(true);
        setCheckChainId(1);
        console.log("You own this Redbrick NFT already!");
      } else {
        setHasClaimedNFT(false);
        setCheckChainId(3);
        console.log("You don't own this NFT yet!");
      }
    } catch (error) {
      setHasClaimedNFT(false);
      setCheckChainId(2);
      console.error("Failed to get balance", error);
    }
  };

  useEffect(() => {
    if (!address) {
      return;
    }

    checkBalance();
  }, [address, editionDrop]);

  useEffect(() => {
    if (chainId === 80001) {
      progressState.setProgress((prevValue) => [
        ...prevValue
          .filter((x) => x.id < 4)
          .map((y) => {
            return { ...y, active: false };
          }),
        ...prevValue
          .filter((x) => x.id === 4)
          .map((y) => {
            return { ...y, active: true };
          }),
        ...prevValue
          .filter((x) => x.id > 4)
          .map((y) => {
            return { ...y, active: false };
          }),
      ]);
    }
  }, [chainId, checkChainId]);

  useEffect(() => {
    if (hasClaimedNFT || completed) {
      progressState.setProgress((prevValue) => [
        ...prevValue
          .filter((x) => x.id < 5)
          .map((y) => {
            return { ...y, active: false };
          }),
      ]);
    }
  }, [hasClaimedNFT, completed]);

  const mint = async () => {
    if (editionDrop && address) {
      setInProgress(true);
      const tx = await editionDrop.claimTo(address, props.id, 1);
      console.log(tx);
      setInProgress(false);
      setCompleted(true);
      toast.success("Mint successful!");
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
                      View your NFTs on Rarible by clicking the button below
                    </li>
                    <li>
                      Share your NFT to social networks like LinkedIn by posting
                      the file or the listing URL from Rarible
                    </li>
                    <li>
                      Learn more about NFTs at{" "}
                      <a
                        target="_blank"
                        href="https://ethereum.org/en/nft/"
                        rel="noopener noreferrer"
                      >
                        <u>ethereum.org/en/nft/</u>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      If you would like to view our smart contract you can see
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
                  <div className="flex items-center">
                    <p>
                      Sign the transaction and wait until the minting process is
                      complete
                    </p>
                    <ReactLoading
                      type="bubbles"
                      color="#FFFFFF"
                      height={10}
                      width={19}
                    />
                  </div>
                </TitleContainer>
              ) : hasClaimedNFT ? (
                <TitleContainer className="grid gap-6">
                  <Title>{props.nexttitle}</Title>
                  <ul className="list-disc ml-6 leading-relaxed font-[300] text-[#D8D8D8] 3xl:text-2xl 3xl:leading-relaxed">
                    <li>
                      View your NFTs on Rarible by clicking the button below
                    </li>
                    <li>
                      Share your NFT to social networks like LinkedIn by posting
                      the file or the listing URL from Rarible
                    </li>
                    <li>
                      Learn more about NFTs at{" "}
                      <a
                        target="_blank"
                        href="https://ethereum.org/en/nft/"
                        rel="noopener noreferrer"
                      >
                        <u>ethereum.org/en/nft/</u>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      If you would like to view our smart contract you can see
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
3xl:text-base
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
  3xl:text-base
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
3xl:text-4xl
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
