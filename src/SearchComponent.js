import React, { useContext, useEffect, useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import { ProductContext } from './ProductContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import './ProductList.css'
import { Link, useParams } from 'react-router-dom'

function SearchComponent(props) {
  let params = useParams()

  let navigate = useNavigate()
  let { searchProduct, deleteProduct } = useContext(ProductContext)

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      await searchProduct(params.search).then((response) => {
        setProducts(response)
      })
    }

    getProducts()
  }, [params])

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

  return (
    <Stack direction="vertical" gap={3}>
      <h1>Products</h1>
      <div className="container">
        {products.map((product) => (
          <Card className="align-self-start w-25">
            <Card.Img
              className="sizeAdjust"
              variant="top"
              src={product.image}
            />
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>
                <span>{`$${product.price}`}</span>
              </Card.Text>
              <Link
                to={`/view/${product.id}`}
                className="btn btn-secondary mx-3"
              >
                View
              </Link>
              <Link to={`/edit/${product.id}`} className="btn btn-primary mx-3">
                Edit
              </Link>
              <Button
                variant="danger"
                onClick={handleDeleteProduct.bind(this, product.id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Stack>
  )
}

export default SearchComponent
