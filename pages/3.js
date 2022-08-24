import React, { useEffect } from "react";
import { nftData } from "../components/data";
import Head from "next/head";
import tw from "tailwind-styled-components";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import Minting from "../components/Minting";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { useProgressContext } from "./../Context/ProgressContext";

export default function Mint() {
  const data = nftData.find((x) => x.id == 3);
  const progressState = useProgressContext();

  useEffect(() => {
    progressState.setProgress((prevValue) => [
      ...prevValue
        .filter((x) => x.id < 3)
        .map((y) => {
          return { ...y, active: false };
        }),
      ...prevValue
        .filter((x) => x.id === 3)
        .map((y) => {
          return { ...y, active: true };
        }),
      ...prevValue
        .filter((x) => x.id > 3)
        .map((y) => {
          return { ...y, active: false };
        }),
    ]);
  }, []);

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
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <div className="lg:mt-10 flex items-center justify-center">
            <MainContainer>
              <div className="flex items-center justify-center flex-col lg:flex-row lg:mx-16">
                <VideoContainer>
                  <video autoPlay={true} loop muted>
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
        </motion.div>
        <ToastContainer
          position="top-right"
          autoClose={3200}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
        />
      </Container>
      <ProgressBar />
    </div>
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
border
border-neutral-800
border-2
`;

const VideoContainer = tw.div`
items-center
flex
justify-center
py-10
pr-10
pl-10
lg:pl-0
w-full
lg:max-w-md
3xl:max-w-2xl
`;

const Container = tw.div`
text-white
justify-center
container mx-auto
`;
