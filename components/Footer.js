import tw from "tailwind-styled-components"

const footer = () => {
  return (
   <Container>
       <FooterContainer>
           Click on Connect Wallet to begin the minting process...
       </FooterContainer>
   </Container>
  )
}

export default footer

const Container = tw.div`
flex
mt-6
justify-center
text-center
`

const FooterContainer = tw.div`
max-w-screen-lg
w-full
`