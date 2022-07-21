import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl:
              "https://api.defender.openzeppelin.com/autotasks/e59cb998-a2c8-4c31-a9fe-503120770401/runs/webhook/3d577e91-cac3-4913-8fe1-17a1fde0a8e2/5VLsiaUVXtJdCBpHfG9QeP",
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
