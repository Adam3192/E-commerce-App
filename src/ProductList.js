import React from 'react'
import Stack from 'react-bootstrap/Stack'
import { ProductContext } from './ProductContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import './ProductList.css'
import { Link, Outlet } from 'react-router-dom'

function ProductList(props) {
  let navigate = useNavigate()
  let { getProduct, deleteProduct } = useContext(ProductContext)

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

  function productList(products) {
    if (products === null) return

    return products.map((product) => (
      <Card className="align-self-start w-25">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>
            <span>{`$${product.price}`}</span>
          </Card.Text>
          <Link to={`/view/${product.id}`} className="btn btn-secondary mx-3">
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
    ))
  }

  return (
    <Stack direction="vertical" gap={3}>
      <h1>Products</h1>
      <div className="container">
        <ProductContext.Consumer>
          {({ products }) => productList(products)}
        </ProductContext.Consumer>
      </div>
    </Stack>
  )
}

export default ProductList
