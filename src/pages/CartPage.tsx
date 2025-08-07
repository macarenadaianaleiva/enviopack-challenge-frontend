import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
import type { Product } from '../types/product'
import productsData from '../data/products.json'


const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const navigate = useNavigate()

  const productsInCart: Product[] = cartItems
    .map(ci => productsData.productos.find(p => p.id === ci.productId))
    .filter(Boolean) as Product[]

  const total = productsInCart.reduce((acc, prod) => acc + prod.price, 0)

  const handleCheckout = () => {
    navigate('/checkout')
  }

  if (productsInCart.length === 0) {
    return (
      <Wrapper>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h1>Carrito</h1>
      <ItemList>
        {productsInCart.map(p => (
          <CartItem key={p.id} product={p} />
        ))}
      </ItemList>
      <Summary>
        <p>Total: ${total}</p>
        <Actions>
          <Link to="/">
            <Button>Volver</Button>
          </Link>
          <Button onClick={handleCheckout}>Finalizar compra</Button>
        </Actions>
      </Summary>
    </Wrapper>
  )
}

export default CartPage

// Estilos rápidos
const Wrapper = styled.div`
  padding: 2rem;
`

const ItemList = styled.div`
  margin-bottom: 2rem;
`

const Summary = styled.div`
  font-size: 1.2rem;
`

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`
