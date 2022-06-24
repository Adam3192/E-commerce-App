import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import './ProductList.css'

function ProductList(props) {
  let params = useParams()

  let navigate = useNavigate()
  let { getProduct, deleteProduct } = useContext(ProductContext)
  let [product, setProduct] = useState()
  let [error, setError] = useState()
  function productList(products) {
    console.log(products)

    function handleDeleteProduct(id) {
      deleteProduct(id)
      navigate('/products')
    }
    if (products === null) return
    let { id, productName, image, price } = products

    return products.map((product) => (
      <Card className="align-self-start w-25">
        <Card.Img className="test23" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
          <Card.Text>
            <strong>Phone:</strong> <span>{product.description}</span>
          </Card.Text>
          <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">
            Edit
          </Link>
          <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>
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
