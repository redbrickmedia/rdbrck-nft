import React from "react";
import tw from "tailwind-styled-components";
import Header from "../components/Header";

const notFound = () => {
  return (
    <Container>
      <Header />
      <div className="text-5xl flex justify-center items-center h-screen">
        404 Page not found
      </div>
    </Container>
  );
};

export default notFound;

const Container = tw.div`
w-full
h-screen
text-white
justify-center
px-7
`;
