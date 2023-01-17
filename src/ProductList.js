import React from 'react'
import { ProductContext } from './ProductContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom'

function ProductList(props) {
  let navigate = useNavigate()
  let { deleteProduct } = useContext(ProductContext)

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

  function productList(products) {
    if (products === null) return

    return products.map((product) => (
      <Card className="test33 align-self-start w-75">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>
            <span>{`$${product.price}`}</span>
          </Card.Text>
          <Link to={`/view/${product.id}`} className="btn btn-secondary mx-1 ">
            View
          </Link>
          <Link to={`/edit/${product.id}`} className="btn btn-primary mx-1">
            Edit
          </Link>
          <Button
            className=" m-auto"
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
    <div>
      <h1>Products</h1>
      <div className="container all-products">
        <ProductContext.Consumer>
          {({ products }) => productList(products)}
        </ProductContext.Consumer>
      </div>
    </div>
  )
}

export default ProductList
