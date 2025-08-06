import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CatalogPage from '../pages/CatalogPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import Layout from '../components/Layout/Layout'

export const AppRoutes = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)
