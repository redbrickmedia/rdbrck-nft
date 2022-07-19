import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";
import { nftData } from "./../components/data";
import Card from "../components/card";


const ONBOARD_TEXT = "INSTALL METAMASK";
const CONNECT_TEXT = "Connect";
const INSTALL_BODY =
  "To get started, please create a MetaMask wallet by clicking the button below";
const CONNECT_BODY = "Please connect your wallet to begin";
const forwarderOrigin = "http://localhost:3000/";

export function OnboardingButton() {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const [bodyText, setBodyText] = React.useState(INSTALL_BODY);
  const onboarding = React.useRef();


  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding({ forwarderOrigin });
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

  // ?
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

  //
  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
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
          <p className="font-light text-2xl text-gray-200 mt-10 pr-40 ">
            Please select the anniversary year that you are celebrating!
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
            className="bg-white mt-4 ml-80 border-2 border-black text-black px-6 py-2 rounded-full transition duration-600 hover:scale-105 shadow-md hover:shadow-gray-600"
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
