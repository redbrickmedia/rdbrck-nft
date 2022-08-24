import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import ProgressProvider from "../Context/ProgressContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl:
              "https://api.defender.openzeppelin.com/autotasks/37ad9db8-60c7-491d-8add-289b875f190e/runs/webhook/7e27f051-f923-4375-b581-d25cedf2eba7/8ivtvxbg5zFZW9ZPde2Fpd",
          },
        },
      }}
      desiredChainId={ChainId.Polygon}
    >
      <ProgressProvider>
        <Component {...pageProps} />
      </ProgressProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
