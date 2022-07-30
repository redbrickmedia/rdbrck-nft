import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";
import { nftData } from "./../components/data";
import Card from "../components/card";
import tw from "tailwind-styled-components";


const ONBOARD_TEXT = "INSTALL METAMASK";
const CONNECT_TEXT = "Connect";
const INSTALL_BODY =
  "To get started, please create a MetaMask wallet by clicking the button below";
const CONNECT_BODY = "Please connect your wallet";

const forwarderOrigin = "http://localhost:3000/";

export function OnboardingButton() {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const [bodyText, setBodyText] = React.useState(INSTALL_BODY);
  const onboarding = React.useRef();


  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding( forwarderOrigin, 'https://nft.rdbrck.com/' );
    }
  }, []);


  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setBodyText(CONNECT_BODY);
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  React.useEffect(() => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(handleNewAccounts);
      window.ethereum.on("accountsChanged", handleNewAccounts);
      return () => {
        window.ethereum.removeListener("accountsChanged", handleNewAccounts);
      };
    }
  }, []);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.location.reload();
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts) => setAccounts(newAccounts));
    } else {
      onboarding.current.startOnboarding();
    }
  };
  return (
    <div>
      {isDisabled ? (
        <div className="grid grid-cols-1 ml-80"> 
          <p className="font-light text-2xl text-gray-200 mt-4 pr-40 ">
          To get started, please select the anniversary year that you are celebrating!
          </p>
          <div className="flex items-center gap-6 mt-4">
            {nftData.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="font-light text-2xl text-gray-200 ml-80 mt-10 pr-40 ">
            {bodyText}
          </p>
          <button
            className="mt-4
            ml-80
            uppercase
            tracking-[2px]
            text-xs
            bg-white
            rounded-[100px]
            transition
            duration-600
            hover:scale-105
            text-black
            mt-[20px]
            py-4
            px-4"
            disabled={isDisabled}
            onClick={onClick}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}


export default OnboardingButton;

const Title = tw.h2`
  text-3xl
  font-semibold
  tracking-wide
  mt-10
  `;