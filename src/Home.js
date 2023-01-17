import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import './Home.css'
import Image from './Images/Ball.png'

function Home() {
  let navigate = useNavigate()

  const handleChange = (e) => {
    if (e.target.value === '') return
    e.preventDefault()
    navigate(`${e.target.value}/search`)
  }

  return (
    <div className="fullScreen">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='marginRight' href="/">
            <img
              alt=""
              src={Image}
              className="d-inline-block align-top"
            />{' '}
            Dick's
          </Navbar.Brand>
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
            <Link to="/new" className="nav-link">
              Create
            </Link>
          </Nav>
        </Container>
        <Form className="me-4">
          <FormControl
            onChange={handleChange}
            type="search"
            className="me-4"
            placeholder="Search"
            aria-label="search"
          />
        </Form>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3 mb-5">
        <Outlet />
      </Stack>
      <Footer />
    </div>
  )
}

export default Home
