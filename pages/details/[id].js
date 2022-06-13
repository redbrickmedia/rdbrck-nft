import { useRouter } from "next/router";
import React from "react";
import { nftData } from "../../components/data";
import Head from "next/head";
import Script from "next/script";
import tw from "tailwind-styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Minting from "../../components/Minting";
import Buttons from "../../components/Buttons";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const params = useRouter();

  const data = nftData.find((x) => x.id == params.query.id);

  if (!data) {
    return "Not Found";
  }

  return (
    <Container>
      <Head>
        <title>Redbrick Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        id="tailwind"
        src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"
      />

      <script>tailwind.config = {}</script>

      <Header iswhite />
      <div className="mt-20 flex items-center justify-center">
        <MainContainer>
          <div className="flex items-center justify-center flex-col lg:flex-row">
            <VideoContainer>
              <Image src={data.image} alt="equilibrium" />
            </VideoContainer>
            <div>
              <Minting                   des={data.description}
                  title={data.title}>
                <Buttons
                  id={data.id}
                />
              </Minting>
            </div>
          </div>
        </MainContainer>
      </div>

      <Footer />
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
shadow-xl
border-4
border-black
border-solid
rounded-lg
lg:w-4/6
bg-zinc-500/25
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
const Image = tw.img`
flex
justify-center
`;

const Container = tw.div`
w-full
min-h-screen
text-white
justify-center
px-7
`;
