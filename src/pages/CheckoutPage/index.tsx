import { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { clearCart } from '../../store/cart/cartSlice'
import { updateCredit } from '../../store/user/userSlice'
import styled from 'styled-components'
import productsData from '../../data/products.json'
import type { Product } from '../../types/product'
import { Button, Wrapper } from './styles'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const user = useSelector((state: RootState) => state.user)
  const ranOnce = useRef(false)
  const purchaseTotal = useRef(0)

  const [success, setSuccess] = useState<boolean | null>(null)

  const productsInCart: Product[] = cartItems
    .map((ci) => productsData.productos.find((p) => p.id === ci.productId))
    .filter(Boolean) as Product[]

  const total = productsInCart.reduce((acc, p) => acc + p.price, 0)

  useEffect(() => {
    if (ranOnce.current || success !== null) return

    ranOnce.current = true
    purchaseTotal.current = total

    if (user.credit >= total) {
      dispatch(updateCredit(user.credit - total))
      dispatch(clearCart())
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }, [dispatch, success, user.credit, total])

  if (success === null) return null

  return (
    <Wrapper>
      {success ? (
        <>
          <h1>✅ ¡Compra exitosa!</h1>
          <p>Se descontaron ${purchaseTotal.current} de tu crédito.</p>
          <Link to="/">
            <Button>Volver al catálogo</Button>
          </Link>
        </>
      ) : (
        <>
          <h1>❌ Crédito insuficiente</h1>
          <p>
            Tu crédito actual es de ${user.credit}, pero el total es ${total}.
          </p>
          <Link to="/cart">
            <Button>Volver al carrito</Button>
          </Link>
        </>
      )}
    </Wrapper>
  )
}

export default CheckoutPage
