import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'
import Photo from './Images/Dicks.png'

function AboutUs() {
  return (
    <Stack className='mt-5' direction="horizontal" gap={3}>
      <Image src= {Photo} />
      <div>
        <h1>Welcome to our Company!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          nulla ducimus quis provident repellendus eaque debitis nihil, magni
          exercitationem illo sed sit quos similique officiis error id
          voluptatum dolores aliquid adipisci asperiores. Harum facere
          laudantium iste nihil soluta. Quibusdam rem ipsam dignissimos.
          Necessitatibus adipisci debitis laboriosam quos pariatur tenetur
          possimus perspiciatis in, modi voluptatem veniam.
        </p>
      </div>
    </Stack>
  )
}

export default AboutUs
