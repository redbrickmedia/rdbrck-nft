import Head from "next/head";
import tw from "tailwind-styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/card"; 
import { nftData } from "./../components/data";
import { motion, AnimatePresence } from "framer-motion";
import { OnboardingButton } from './../components/onboarding';

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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* no output file, check https://nextjs.org/docs/messages/no-css-tags */}
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
                Congratulations, we're so happy to celebrate your time with
                Redbrick!
              </h1>
              <p className="font-light text-gray-200 mt-3 pr-40 ">
                We appreciate everything that you do, and as a way of saying
                thank you we wanted to offer you something unique... just like
                the work you do at Redbrick! Please select the anniversary year
                that you are celebrating below to claim your NFT.
              </p>
            </div>
          </div>
          <div className="flex gap-10 place-items-center mt-10 ml-20"></div>
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
`;
