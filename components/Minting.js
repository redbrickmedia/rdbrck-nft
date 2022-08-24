import tw from "tailwind-styled-components";
import Buttons from "./../components/Buttons";

const Minting = (props) => {
  return (
    <Container>
      <Buttons {...props} id={props.id} />
    </Container>
  );
};

export default Minting;

const Container = tw.div`
`;
