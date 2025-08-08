import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { useNavigate, Link } from 'react-router-dom'
import CartItem from '../../components/CartItem'
import type { Product } from '../../types/product'
import productsData from '../../data/products.json'
import { Actions, Button, EmptyCartActions, ItemList, Summary, Wrapper } from './styles'

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const navigate = useNavigate()

  const productsInCart: Product[] = cartItems
    .map((ci) => productsData.productos.find((p) => p.id === ci.productId))
    .filter(Boolean) as Product[]

  const total = productsInCart.reduce((acc, prod) => acc + prod.price, 0)

  const handleCheckout = () => {
    navigate('/checkout')
  }

  if (productsInCart.length === 0) {
    return (
      <Wrapper>
        <h2>Tu carrito está vacío</h2>
        <EmptyCartActions>
          <Link to="/">
            <Button>Volver al catálogo</Button>
          </Link>
        </EmptyCartActions>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h1>Carrito</h1>
      <ItemList>
        {productsInCart.map((p) => (
          <CartItem key={p.id} product={p} />
        ))}
      </ItemList>
      <Summary>
        <span>Total</span>
        <span>$ {total}</span>
      </Summary>

      <Actions>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
        <Button onClick={handleCheckout}>Finalizar compra</Button>
      </Actions>
    </Wrapper>
  )
}

export default CartPage
