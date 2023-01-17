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
        Dick's Sporting Goods, Inc. is an American sporting goods retail company, based in Coraopolis, Pennsylvania. The company was established by Richard "Dick" Stack in 1948, and has approximately 854 stores and 50,100 employees. Dick's is America's largest sporting goods retailer, and it is listed on the Fortune 500.
        </p>
      </div>
    </Stack>
  )
}

export default AboutUs
