import React from "react";
import Header from "../components/Header";
import tw from "tailwind-styled-components";
import { motion, AnimatePresence } from "framer-motion";

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

const howtomint = ({ isVisible }) => {
  return (
    <Container>
      <Header />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className="ml-40 mt-24">
          <div>
            <h1 className="text-4xl font-semibold">
              Here's how to claim your Redbrick NFT:
            </h1>
          </div>
          <div className="grid grid-cols-3 mt-12 w-5/6">
            <h2 className="text-4xl font-bold">Step 1</h2>
            <h2 className="text-4xl font-bold">Step 2</h2>
            <h2 className="text-4xl font-bold">Step 3</h2>
          </div>
          <div className="grid grid-cols-3 mt-4 w-5/6">
            <div className="pr-16">
              Go to&nbsp;
              <a
                target="_blank"
                href="https://metamask.io/download/"
                rel="noopener noreferrer"
              >
                <u>metamask.io/download/</u>
              </a>
              &nbsp;and install the wallet browser extension. Click on the
              extension, "Get Started" and then "Create a Wallet".
            </div>
            <div className="pr-16">
              Make a strong password, and write down your secret key phrase 
              and store it somewhere secure.
              You will need to confirm the seed phrase on the next page.
            </div>
            <div className="pr-16">
              Once confirmed, your wallet is now setup! Go back to the home page of this app,
              select your anniversary year and click on Connect wallet -> Change
              network -> Mint.
            </div>
          </div>
          <div>
            <h1 className="text-4xl mt-16 font-semibold">
              What to do after you claim your NFT?
            </h1>
            <div className="mt-4 w-5/6">
              You can view it on OpenSea, share it to your LinkedIn network, or even add it to your resume as proof that you worked at Redbrick!
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

{
  /* <div className="flex grid grid-cols-1 grid-rows-2">
<div className="ml-20 pt-20 text-white lg:w-2/3">
  <h1 className="text-5xl font-semibold leading-normal">
    How to mint your Redbrick NFT!
  </h1>
</div>
  <div className="grid grid-rows-1 grid-flow-col mt-10">
    <div className="grid pr-10">
      <h1 className="text-4xl">Step 1</h1>
      <h1 className="text-4xl">Step 2</h1>
      <h1 className="text-4xl">Step 3</h1>
    </div> 
    <div className="grid grid-rows-1 grid-flow-col mt-10">
      <p className="mt-4">
        Go to&nbsp;
        <a
          target="_blank"
          href="https://metamask.io/download/"
          rel="noopener noreferrer"
        >
          <u>metamask.io/download/</u>
        </a>
        &nbsp;and install the wallet browser extension. Click on the extension and then "Get Started".
      </p>
 
      <div className="grid justify-start pr-10">
      <p className="mt-4 flex items-center">
        Next, select "Create a Wallet". Create a strong password, and write down your secret key phrase and store it somewhere secure. You will need to confirm the seed phrase on the next page.
      </p>
      </div>
      <div className="grid justify-start pr-10">
      <p className="mt-4 flex items-center">
       Your wallet is now setup! Go back to the home page of this app, select your anniversary year and
        click on Connect wallet -> Change network -> Mint.
      </p>
    </div>
  </div>
</div>
</div> */
}
