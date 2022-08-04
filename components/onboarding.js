import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";
import { nftData } from "./../components/data";
import Card from "../components/card";

const ONBOARD_TEXT = "INSTALL METAMASK";
const CONNECT_TEXT = "Connect";
const INSTALL_BODY =
  "To get started, please create a Metamask wallet by clicking the button below";
const CONNECT_BODY = "Please connect your wallet to begin...";

const forwarderOrigin = "https://nft.rdbrck.com/";

export function OnboardingButton() {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const [bodyText, setBodyText] = React.useState(INSTALL_BODY);
  const onboarding = React.useRef();

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding(
        forwarderOrigin,
        "https://nft.rdbrck.com/"
      );
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
        <div className="md:ml-24">
          <p className="font-light text-2xl 3xl:text-4xl text-gray-200 3xl:mt-10 mt-6 lg:pr-40 2xl:pr-2">
            To get started, please select the anniversary year that you are
            celebrating!
          </p>
          <div className="flex flex-wrap lg:w-4/6">
            {nftData.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="font-light text-2xl 3xl:text-3xl text-gray-200 mt-6 md:ml-24 lg:pr-40 2xl:pr-2 ">
            {bodyText}
          </p>
          <button
            className="mt-8
            sm:mt-10
            md:ml-24
            justify-center
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
            py-3
            px-10
            h-10
            3xl:h-16
            "
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
