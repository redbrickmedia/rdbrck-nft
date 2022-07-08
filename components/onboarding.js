import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";
import { nftData } from "./../components/data";
import Card from "../components/card"; 

// sets what the button text will say
const ONBOARD_TEXT = "CLICK INSTALL TO CREATE A METAMASK WALLET";
const CONNECT_TEXT = "Connect";
const CONNECTED_TEXT = "Connected";

export function OnboardingButton() {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();

  // if onboarding is not currently happening, begin a new MetaMask onboarding process
  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  // if MetaMask is already installed, check the length, set button as connected and disabled true
  // Disabled(true) will disable the button and only show connected_text
  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        // setButtonText(CONNECTED_TEXT);
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  },
  [accounts]);
  console.log(accounts);

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
        {
            isDisabled ? (
                
                <div className="flex gap-10 place-items-center ml-80">
                {nftData.map((item) => <Card key={item.id} {...item} />)}
                </div>
            ):(
    
                    <button className="bg-white mt-4 ml-80 border-2 border-black text-black px-6 py-2 rounded-full transition duration-600 hover:scale-105 shadow-md hover:shadow-gray-600" 
                    disabled={isDisabled} onClick={onClick}>
                        {buttonText}
                    </button>

            )
        }
    </div>
  );
}

export default OnboardingButton;
