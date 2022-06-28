import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'

export const ProductContext = createContext()

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      await refreshProducts()
    }
    getProducts()
  }, [])

  function refreshProducts() {
    return axios.get('http://localhost:3001/products').then((response) => {
      setProducts(response.data)
    })
  }
  
  function searchProduct(search) {
    return axios
      .get(`http://localhost:3001/products/?q=${search}`)
      .then((response) => {
        return new Promise((resolve) => resolve(response.data))
      })
  }

  function getProduct(id) {
    return axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => new Promise((resolve) => resolve(response.data)))
      .catch(
        (error) => new Promise((_, reject) => reject(error.response.statusText))
      )
  }

  function deleteProduct(id) {
    axios.delete(`http://localhost:3001/products/${id}`).then(refreshProducts)
  }

  function addProduct(product) {
    return axios
      .post('http://localhost:3001/products', product)
      .then((response) => {
        refreshProducts()
        return new Promise((resolve) => resolve(response.data))
      })
  }

  function updateProduct(product) {
    return axios
      .put(`http://localhost:3001/products/${product.id}`, product)
      .then((response) => {
        refreshProducts()
        return new Promise((resolve) => resolve(response.data))
      })
  }

  
  <Form className="style">
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        name="productName"
        placeholder="Search..."
        // value={searchInput}
        // onChange={handleChange}
      />
    </Form.Group>
  </Form>

  return (
    <ProductContext.Provider
      value={{
        products,
        getProduct,
        deleteProduct,
        addProduct,
        updateProduct,
        searchProduct
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}
