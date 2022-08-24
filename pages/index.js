import Head from "next/head";
import tw from "tailwind-styled-components";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";
import { OnboardingButton } from "./../components/Onboarding";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default function Home() {
  return (
    <div>
    <Container>
      <Head>
        <title>Redbrick NFT</title>
        <meta
          name="Redbrick NFT"
          content="An NFT minting dapp created by Foster Schlienz"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <motion.div
        className=" px-10 text-center"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className="md:ml-2 md:mt-2">
          <div className="flex">
            <div className="mt-20 lg:mt-28 3xl:mt-44 text-white">
              <h1 className="2xl:px-10 text-center text-4xl lg:text-[54px] 3xl:text-[84px] 3xl:w-full font-semibold tracking-normal leading-relaxed lg:leading-normal 3xl:leading-relaxed">
                Congratulations, we&apos;re so happy to celebrate your time with
                Redbrick!
              </h1>
            </div>
          </div>
        </div>
        <OnboardingButton />
      </motion.div>
    </Container>
    <ProgressBar />
    </div>
  );
}

const Container = tw.div`
text-white
justify-center
container mx-auto
`