import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

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

const whatsnext = () => {
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
              What to do after you claim your NFT?
            </h1>
          </div>
          <div className="grid grid-cols-3 mt-28 flex justify-items-center">
            <h2 className="text-4xl font-bold mr-14">Share it</h2>
            <h2 className="text-4xl font-bold mr-14">View listing</h2>
            <h2 className="text-4xl font-bold mr-14">Learn more</h2>
          </div>
          <div className="grid grid-cols-3 mt-6 flex justify-items-center">
            <div className="px-14">
              You can share the NFT to your social networks by posting the URL
              to your listing, or the file itself, and show off your tenureship
              and digital asset. You can even set it as your{" "}
              <a
                target="_blank"
                href="https://support.opensea.io/hc/en-us/articles/4415562648851-How-do-I-set-my-NFT-as-my-Twitter-profile-picture-"
                rel="noopener noreferrer"
              >
                {" "}
                <u>profile picture on Twitter</u>
                {""}
              </a>
              !
            </div>
            <div className="px-14">
              You can view your NFT on OpenSea by connecting your wallet
              <a
                target="_blank"
                href="https://opensea.io/login"
                rel="noopener noreferrer"
              >
                {" "}
                <u>here</u>
                {""}. OpenSea is the worlds largest NFT marketplace, and an easy
                way to view all the NFTs you own. If you have crypto, you can
                buy, sell and trade NFTs here.
              </a>
            </div>
            <div className="px-14">
              You can visit{" "}
              <a
                target="_blank"
                href="https://ethereum.org/en/nft/"
                rel="noopener noreferrer"
              >
                <u>here</u>{" "}
              </a>
              to learn more about what NFTs are and how they work. If you want
              to view our smart contract, and see a list of reecnt transactions
              and all owners, you can visit Polyscan{" "}
              <a
                target="_blank"
                href="https://mumbai.polygonscan.com/address/0xEAbB004E555B2fb3071a8f76df31bFEE7a8bFA50"
                rel="noopener noreferrer"
              >
                <u>here</u> .
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </Container>
  );
};

const Container = tw.div`
max-w-max
text-white
justify-center
container mx-auto
`;


export default whatsnext;
