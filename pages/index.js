import Head from "next/head";
import tw from "tailwind-styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { OnboardingButton } from "./../components/onboarding";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 5,
  },
  out: {
    opacity: 0,
  },
};

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Redbrick NFT</title>
        <meta name="Redbrick NFT" content="An NFT minting dapp created by Foster Schlienz" />
        <link rel="icon" href="/download.png" />
      </Head>

      <Header />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className="ml-60 mt-16">
          <div className="flex">
            <div className="ml-20 pt-20 text-start text-white lg:w-2/3">
              <h1 className="text-6xl font-semibold leading-normal">
                Congratulations, we&apos;re so happy to celebrate your time with
                Redbrick!
              </h1>
            </div>
          </div>
          <div className="flex gap-10 place-items-center mt-4 ml-20"></div>
        </div>
        <OnboardingButton />
        <Footer />
      </motion.div>
    </Container>
  );
}

const Container = tw.div`
w-full
h-screen
text-white
justify-center
container mx-auto
`;
