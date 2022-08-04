import React from "react";
import { nftData } from "../components/data";
import Head from "next/head";
import tw from "tailwind-styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Minting from "../components/Minting";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

export default function Mint() {
  const data = nftData.find((x) => x.id == 3);

  if (!data) {
    return "Not Found";
  }

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

  return (
    <Container>
      <Head>
        <title>Redbrick NFT</title>
        <meta name="Redbrick NFT" content="An NFT minting dapp created by Foster Schlienz" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header iswhite />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className="mt-20 flex items-center justify-center">
          <MainContainer>
            <div className="flex items-center justify-center flex-col lg:flex-row lg:mx-16">
              <VideoContainer>
                <video autoPlay={true} loop muted style={{ width: '368px', height: '368px' }}>
                  <source src={data.video} />
                </video>
              </VideoContainer>
              <div>
                <Minting
                  des={data.description}
                  title={data.title}
                  id={data.id}
                  connect={data.connecttitle}
                  connectdes={data.connectdescription}
                  nexttitle={data.nexttitle}
                />
              </div>
            </div>
          </MainContainer>
        </div>
        <Footer />
      </motion.div>
      <ToastContainer
        position="bottom-center"
        autoClose={3200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

const MainContainer = tw.div`
backdrop-blur-sm
bg-opacity-60
shadow-black
shadow-3xl
mt-4
bg-[#151515]
rounded-[12px]
flex
flex-col
items-center
grid-rows-{n}
`;

const VideoContainer = tw.div`
items-center
flex
justify-center
max-w-md
grid-rows-{n}
p-10
`;

const Container = tw.div`
text-white
justify-center
container mx-auto
`;
