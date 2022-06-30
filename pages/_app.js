import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl:
              "https://api.defender.openzeppelin.com/autotasks/bf8176f6-371a-4b89-aa5b-f6c2fb505e97/runs/webhook/3d577e91-cac3-4913-8fe1-17a1fde0a8e2/Fifqfb1Joe2p6wnQeyGD7w",
              
          },
        },
      }}
      desiredChainId={ChainId.Mumbai}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
