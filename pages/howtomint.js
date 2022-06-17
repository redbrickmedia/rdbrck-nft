import React from "react";
import Header from "../components/Header";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.2,
  },
};

const pageTransition = {
  ease: "anticipate",
  duration: 3,
};

const howtomint = () => {
  return (
    <Container className="text-white">
      <Header />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="ml-60">
          <div className="flex">
            <div className="ml-20 pt-20 text-start text-white lg:w-2/3">
              <h1 className="text-5xl font-semibold leading-normal">
                Here's how you can mint your very own Redbrick NFT!
              </h1>
              <h2 className="text-2xl font-semibold mt-20 leading-normal">
                Step 1: Install a MetaMask wallet
              </h2>
              <p className="font-light text-gray-200 mt-3 pr-40 ">
                In order to claim your NFT, you need a compatible wallet. Please
                visit
                <a
                  target="_blank"
                  href="https://metamask.io/download/"
                  rel="noopener noreferrer"
                >
                  <u>&nbsp;metamask.io/download/&nbsp;</u>
                </a>
                to install it as a browser extension.
                <br /> <br />
                1. Next, click on the MetaMask browser extension and select "Get
                Started". After that, click on "Create a Wallet"
                <br /> <br />
                2. Create a password for your wallet, and save your secret key
                phrase. The most common method is to write your 12-word phrase
                on a piece of paper and store it safely in a place where only
                you have access. Never share your seed phrase or your private
                key to anyone or any site, unless you want them to have full
                control over your funds.
                <br /> <br />
                3. After saving your seed phrase, you will need to confirm it by
                clicking on every word in the order they were presented on the
                previous screen. Confirm to proceed, and you're done!
              </p>
              <h2 className="text-2xl font-semibold mt-20 leading-normal">
                Step 2: That's it!
              </h2>
              <p className="font-light text-gray-200 mt-3 pr-40 ">
                Once you have your wallet all setup, you are ready to mint. Go
                ahead and navigate to the anniversary year you are celebrating,
                and follow the on screen prompts.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

const Container = tw.div`
w-full
h-screen
text-white
justify-center
px-7
`;

export default howtomint;
