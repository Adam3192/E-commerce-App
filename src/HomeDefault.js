import React from 'react'
import { useContext, useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate, Link } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import './HomeDefault.css'

function HomeDefault() {
 let navigate = useNavigate()

 let { getProduct, deleteProduct } = useContext(ProductContext)
 let [product, setProduct] = useState()
 let [ error, setError ] = useState()

 function handleDeleteProduct(id) {
  deleteProduct(id)
  navigate('/products')
}

 function productList(products) {
  if (products === null) return
  let { id, productName, image, price } = products

  return products.slice(0,3).map((product) => (


    <Card className="align-self-start w-25">
        <Card.Img
          variant="top"
          src={product.image} />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
          <Card.Text>
            <span>{`$${product.price}`}</span>
          </Card.Text>
          <Link to={`/view/${product.id}`} className="btn btn-secondary mx-3">
            View
          </Link>
          <Link to={`/edit/${product.id}`} className="btn btn-primary mx-3">
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
    <div>
      <Stack direction="vertical" gap={3}>
      <h1>Products</h1>
      <div className='container'>
          <ProductContext.Consumer>
            {({ products }) => productList(products)}
          </ProductContext.Consumer>
      </div>
      </Stack>
    </div>
  )
}

export default HomeDefault

