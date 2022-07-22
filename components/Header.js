import tw from "tailwind-styled-components";
import Link from "next/link";

const header = () => {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <h1 className="text-3xl uppercase font-semibold tracking-[.29em] cursor-pointer p-7">
          Redbrick
        </h1>
      </Link>
    </HeaderContainer>
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
