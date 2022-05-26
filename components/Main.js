import tw from "tailwind-styled-components"
import Minting from "./Minting"

const Container = tw.div`
flex
flex-col
items-center
grid-rows-{n}
`
const VideoContainer = tw.div`
flex
justify-center
max-w-screen-lg
grid-rows-{n}
`
const Video = tw.video`
flex
justify-center
`


const main = () => {
  return (
    <Container>
        <VideoContainer>
            <Video src="./bg-video.mp4" muted={true} autoPlay={true} loop={true}/>
        </VideoContainer>
        <Minting />
        <VideoContainer>
            <Video src="./bg-video.mp4" muted={true} autoPlay={true} loop={true}/>
        </VideoContainer>
        <Minting />
    </Container>
  )
}

export default main