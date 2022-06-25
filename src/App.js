import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import Product from './Product'
import AboutUs from './AboutUs'
import HomeDefault from './HomeDefault'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeDefault />} />
          <Route path="products" element={<ProductList />}>
            <Route path=":productId" element={<Product />} />
            <Route path="*" element={<h1>Product Not Found</h1>} />
          </Route>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="new" element={<ProductForm />} />
          <Route path="edit/:productId" element={<ProductForm />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
