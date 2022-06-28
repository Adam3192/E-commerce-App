import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { useState, useContext, useEffect } from 'react'
import { ProductContext } from './ProductContext'
import { Link, Outlet } from 'react-router-dom'

const SearchBar = () => {
  let { products, searchProcuct } = useContext(ProductContext)
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
    searchProcuct(searchInput)
  }

  if (searchInput.length > 0) {
    products.filter((product) => {
      return (
        <div className="test88">
          <Card className="align-self-start w-25">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>
                <span>{`$${product.price}`}</span>
              </Card.Text>
              <Card.Text>
                <strong>Description: </strong>
                <span>{`${product.description}`}</span>
              </Card.Text>
              <Card.Text>
                <strong>Condition: </strong>
                <span>{`${product.condition}`}</span>
              </Card.Text>
              <Link to={`/edit/${product.id}`} className="btn btn-primary mx-3">
                Edit
              </Link>
              {/* <Button
                variant="danger"
                onClick={handleDeleteProduct.bind(this, product.id)}
              >
                Delete
              </Button> */}
            </Card.Body>
          </Card>
        </div>
      )
    })
  }

  <Form className="style">
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        name="productName"
        placeholder="Search..."
        value={searchInput}
        onChange={handleChange}
      />
    </Form.Group>
  </Form>

}

export default SearchBar
