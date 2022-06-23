import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'

function AboutUs() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Image src="https://images.unsplash.com/photo-1622482594949-a2ea0c800edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZiUyMGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
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

