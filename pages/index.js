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
    opacity: 1,
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
        <meta
          name="Redbrick NFT"
          content="An NFT minting dapp created by Foster Schlienz"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <motion.div
        className="px-10 text-center md:text-left"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className="md:ml-2 md:mt-2">
          <div className="flex">
            <div className="md:ml-20 pt-20 text-white">
              <h1 className="text-4xl lg:text-[54px] 3xl:text-[84px] 2xl:w-5/6 3xl:w-full font-semibold tracking-normal leading-relaxed lg:leading-normal 3xl:leading-relaxed">
                Congratulations, we&apos;re so happy to celebrate your time with
                Redbrick!
              </h1>
            </div>
          </div>
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
`