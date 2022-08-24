import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";
import { nftData } from "./Data";
import Card from "./Card";
import { useProgressContext } from "../Context/ProgressContext";

const ONBOARD_TEXT = "INSTALL METAMASK";
const CONNECT_TEXT = "Connect wallet";
const INSTALL_BODY =
  "To claim your NFT, please install Metamask by clicking the button below";
const CONNECT_BODY = "To claim your NFT, please connect your wallet";

const forwarderOrigin = "https://nft.rdbrck.com/";

export function OnboardingButton() {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const [bodyText, setBodyText] = React.useState(INSTALL_BODY);
  const onboarding = React.useRef();
  const progressState = useProgressContext();

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
        progressState.setProgress((prevValue) => [
          ...prevValue
            .filter((x) => x.id < 2)
            .map((y) => {
              return { ...y, active: false };
            }),
          ...prevValue
            .filter((x) => x.id === 2)
            .map((y) => {
              return { ...y, active: true };
            }),
          ...prevValue
            .filter((x) => x.id > 2)
            .map((y) => {
              return { ...y, active: false };
            }),
        ]);
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
        <div className="">
          <p className="text-center justify-center font-light text-base lg:text-2xl 3xl:text-4xl text-gray-200 3xl:mt-10 mt-6">
            Let&apos;s get started. Please select the anniversary year that you
            are celebrating below.
          </p>
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
            {nftData.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="font-light text-2xl 3xl:text-3xl text-gray-200 mt-6">
            {bodyText}
          </p>
          <button
            className="mt-8
            sm:mt-10
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
