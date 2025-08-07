import { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { clearCart } from '../../store/cart/cartSlice'
import { updateCredit } from '../../store/user/userSlice'
import productsData from '../../data/products.json'
import type { Product } from '../../types/product'
import { Button, Card, Container, Message, Title } from './styles'

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
    <Container>
      <Title>Estado de la compra</Title>
      <Card>
        {success ? (
          <>
            <Message>La compra se realizó con éxito</Message>
            <Link to="/">
              <Button>Volver al catálogo</Button>
            </Link>
          </>
        ) : (
          <>
            <Message>
              Ocurrió un error con la compra, revisá que el importe no supere el crédito disponible
              en tu cuenta
            </Message>
            <Link to="/cart">
              <Button>Volver al carrito</Button>
            </Link>
          </>
        )}
      </Card>
    </Container>
  )
}

export default CheckoutPage
