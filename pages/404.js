import React from "react";
import tw from "tailwind-styled-components";
import Header from "../components/Header"

const notFound = () => {
  return (
    <Container className="text-white">
    <Header />
    404 Page not found
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