import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'
import LoadingIndicator from './LoadingIndicator'
import Footer from './Footer'

function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            <Link to="/products" className="nav-link">
              View All
            </Link>
            <Link to="/products/new" className="nav-link">
              Create
            </Link>
          </Nav>
          <Navbar.Text>
            <LoadingIndicator />
          </Navbar.Text>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
      <Footer />
    </>
  )
}

export default Home

