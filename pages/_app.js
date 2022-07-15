import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl:
              "https://api.defender.openzeppelin.com/autotasks/5a011f91-6116-4fef-afda-3c3419d0a602/runs/webhook/3d577e91-cac3-4913-8fe1-17a1fde0a8e2/Pnfffp5Q6PT17suLtHsGDy",
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
