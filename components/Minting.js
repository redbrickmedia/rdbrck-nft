import tw from "tailwind-styled-components";
import "react-toastify/dist/ReactToastify.css";
import Buttons from "../components/Buttons";

// buttons module not found? ^

const Minting = (props) => {
  return (
    <Container>
    
    {/* {chainId == 80001 ? <Mint /> : <WrongChain />}

    / DONE / add Mint to its own component
    / DONE / add button container until line 96 in its own component I THINK
    If the chain ID is correct, show MINT.
    If it is wrong, show Wrong Chain component with function to switch chains */}

      <Mint>
        <TitleContainer className="grid gap-8">
          <Title>{props.title}</Title>
          <h2 className="font-light">{props.des}</h2>
        </TitleContainer>
        <Buttons></Buttons>
      </Mint>
    </Container>
  );
};

export default Minting;

const Mint = tw.div`
flex
flex-col
max-w-screen-sm
mt-[-50px]
`;

const Container = tw.div`
`;

const Title = tw.h2`
uppercase
text-3xl
font-bold
mt-2
`;
const TitleContainer = tw.div`
ml-20
pr-20
text-white
max-w-screen-lg
w-full
`;
