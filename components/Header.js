import tw from "tailwind-styled-components";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

const header = () => {
  return (
    <AnimatePresence>
    <HeaderContainer>
      <Link href={"/"}>
        <h1 className="text-3xl uppercase font-semibold tracking-[.29em] cursor-pointer">
          Redbrick
        </h1>
      </Link>
      <Link href={`/howtomint`}>
        <button className="bg-white border-2 border-black text-black px-5 py-2 rounded-full transition duration-600 hover:scale-105 ml-16">
          How to Mint
        </button>
      </Link>
    </HeaderContainer>
    </AnimatePresence>
  );
};

export default header;

const HeaderContainer = tw.div`
flex
h-20
pt-[22px]
pl-[15px]
justify-start
items-center
`;
