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

const howtomint = () => {
  return (
    <Container>
      <Header />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className="mt-24 p-10">
          <div>
            <h1 className="flex justify-center text-6xl font-bold">
              Here's how to claim your Redbrick NFT:
            </h1>
          </div>
          <div className="grid grid-cols-3 mt-28 flex justify-items-center">
            <h2 className="text-4xl font-bold mr-14">Step 1</h2>
            <h2 className="text-4xl font-bold mr-14">Step 2</h2>
            <h2 className="text-4xl font-bold mr-14">Step 3</h2>
          </div>
          <div className="grid grid-cols-3 mt-6 flex justify-items-center">
            <div className="px-14">
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
            <div className="px-14">
              Make a strong password, and write down your secret key phrase and
              store it somewhere secure. You will need to confirm the seed
              phrase on the next page.
            </div>
            <div className="px-14">
              Once confirmed, your wallet is now setup! Go back to the home page
              of this app, select your anniversary year and click on Connect
              wallet -> Change network -> Mint.
            </div>
          </div>
        </div>
        <After>
            <div className="pt-52 flex flex-row gap-10">
              <h1 className="text-4xl font-bold leading-relaxed">
                What to do after you claim your NFT?
              </h1>
              <div className="">
                {/* Congratulations! You just claimed an NFT, and we're so excited
                for you. Here's a few things you can do with your new NFT: */}
                <ul className="list-disc ml-10">
                  <li>
                    Share it to your LinkedIn network by posting the NFT and
                    showing off your tenure ship
                  </li>
                  <li>
                    You can view your NFT listing on OpenSea by connecting your
                    wallet
                    <a
                      target="_blank"
                      href="https://opensea.io/login"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <u>here</u>{" "}
                    </a>
                  </li>
                  <li>
                    Show your parents and try to explain what an NFT is to them
                  </li>
                </ul>
              </div>
            </div>
        </After>
      </motion.div>
    </Container>
  );
};

const Container = tw.div`
max-w-max
text-white
justify-center
`;

const After = tw.div`
px-96
mb-60
mt-60
bg-white
text-black
`;

export default howtomint;
