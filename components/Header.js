import tw from "tailwind-styled-components"
import Image from 'next/image'
import logo from "../assets/logo.png"

const Container = tw.div`
`
const HeaderContainer = tw.div`
flex
justify-center
h-20
mt-[50px]
`

const header = () => {
  return (

<Container>
    <HeaderContainer>
        <Image 
        width={700}
        height={70}
        src={logo}
        alt="logo"
        />
    </HeaderContainer>
</Container>

  )
}

export default header