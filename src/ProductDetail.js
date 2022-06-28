import React from 'react'
import { ProductContext } from './ProductContext'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import './ProductDetail.css'
import Button from 'react-bootstrap/Button'

function ProductDetail(props) {
  let navigate = useNavigate()
  let params = useParams()
  let [product, setProduct] = useState({
    id: params.productId,
    productName: '',
    description: '',
    price: '',
    condition: '',
  })
  let { getProduct, deleteProduct, updateProduct } = useContext(ProductContext)
  let { id, productName, description, price, condition, image } = product

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
      await getProduct(id).then((product) => setProduct(product))
    }
    fetch()
  }, [id])

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
      await getProduct(id).then((product) => setProduct(product))
    }
    fetch()
  }, [id])

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
          <Button
            variant="danger"
            onClick={handleDeleteProduct.bind(this, product.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductDetail
