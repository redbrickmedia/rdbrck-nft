
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

  const data = nftData.find((x) => x.id == 2);

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
        <title>Redbrick Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/download.png" />
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
            <div className="flex items-center justify-center flex-col lg:flex-row">
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
shadow-black
shadow-2xl
mt-20
bg-black
rounded-[100px]
lg:w-4/6
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
w-full
min-h-screen
text-white
justify-center
container mx-auto
`;
