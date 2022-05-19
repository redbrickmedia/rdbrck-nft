import tw from "tailwind-styled-components"
import { useAddress, useDisconnect, useMetamask, useEditionDrop} from '@thirdweb-dev/react';
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';

const Minting = () => {
    const[totalSupply, setTotalSupply] = useState(0);
    const[inProgress, setInProgress] = useState(false);
    const[completed, setCompleted] = useState(false);
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();
    const editionDrop = useEditionDrop("0xB636C1a63C3b092a7c74304B1947B0162D08a1e4")
    console.log(address);

    const mint = async () => {
        if(editionDrop && address){
            setInProgress(true);
            const tx = await editionDrop.claimTo(address, 0, 1)
            console.log(tx);
            setInProgress(false);
            setCompleted(true);
        }

    }

    const viewOpensea = () => {
        const url = "https://testnets.opensea.io/collection/1-year-anniversary"
        window.open(url, "_blank");
    }

    const startOver = () => {
        setCompleted(false);
        setInProgress(false);
        disconnectWallet();
    }

    useEffect(()=>{
        const getTotal= async () => {
            if(editionDrop){
                const total = await editionDrop.totalSupply(0)
                setTotalSupply(total.toNumber());
            }
        }
        getTotal();
    }, (editionDrop))

  return (
    <Container>
        <Mint>

            <TitleContainer>
                <Title>Welcome to the <br/> Redbrick NFT site</Title>
            </TitleContainer>

            <Count>
                {address && totalSupply}
            </Count>

            <ButtonContainer>
                {
                    address 
                        ? <>
                            {
                            completed 
                                ?
                                <FilledButton onClick={viewOpensea}>
                                    View on OpenSea
                                </FilledButton>
                                :
                                <FilledButton 
                            disabled={inProgress}
                            onClick={mint}>
                            {
                                inProgress 
                                    ?<ReactLoading type="bubbles" color="#FFFFFF" height={30} width={65} />
                                    :
                                    <>mint</>
                            }
                             </FilledButton>
                        }
                        <UnfilledButton 
                        disabled={inProgress}
                        onClick={disconnectWallet}>
                            Disconnect
                        </UnfilledButton>
                        </>
                        : <FilledButton onClick={connectWithMetamask}>Connect Wallet</FilledButton>

                }
            </ButtonContainer>

        </Mint>

    </Container>
  )
}

export default Minting

const Count = tw.div`
mt-[20px]
`

const FilledButton = tw.button`
flex-1
bg-[#f4be06] hover:bg-[#f8df35] text-black font-bold py-2 px-4 rounded
mt-[30px]
`
const UnfilledButton = tw(FilledButton)`
bg-black
text-white
border-2
hover:bg-white
hover:text-black
`

const ButtonContainer = tw.div`
flex
pr-5
pl-5
gap-4
`

const Mint = tw.div`
flex
flex-col
items-center
max-w-screen-sm
bg-black
mt-[-50px]
`

const Container = tw.div`
`
const Title = tw.h2`
uppercase
text-3xl
italic
font-bold
mt-2
`
const TitleContainer = tw.div`
max-w-screen-lg
w-full
flex
justify-center
text-center
`