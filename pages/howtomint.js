import React from "react";
import Header from "../components/Header";
import tw from "tailwind-styled-components";

const howtomint = () => {
  return (
    <Container className="text-white">
      <Header />
      <div className="ml-60">
        <div className="flex">
          <div className="ml-20 pt-20 text-start text-white lg:w-1/2">
            <h1 className="text-5xl font-semibold leading-normal">
              Heres how you can mint your very own Redbrick NFT!
            </h1>
            <h2 className="text-4xl font-semibold mt-10 leading-normal">
              Step 1: Install a MetaMask wallet
            </h2>
            <p className="font-light text-gray-200 mt-3 pr-40 ">
              We appreciate everything that you do, and as a way of saying thank
              you we wanted to offer you something unique... just like the work
              you do at Redbrick! Please select the anniversary year that you are
              celebrating below to claim your NFT.
            </p>
          </div>
        </div>
      </div>
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
