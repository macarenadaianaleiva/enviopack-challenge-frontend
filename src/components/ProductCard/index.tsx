import type { Product } from '../../types/product'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cart/cartSlice'
import type{ RootState } from '../../store'
import { CardWrapper, Button, Image, Title, Price } from './styles'
import { Link } from 'react-router-dom'
import ProductImage from '../../assets/image-product.jpg'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const isInCart = cartItems.some(i => i.productId === product.id)

  const handleClick = () => {
    if (!isInCart) dispatch(addToCart(product.id))
  }

  return (
    <CardWrapper>
      <Image src={ProductImage} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
      {isInCart ? (
        <Link to="/cart">
          <Button>Ver carrito</Button>
        </Link>
      ) : (
        <Button onClick={handleClick}>Agregar al carrito</Button>
      )}
    </CardWrapper>
  )
}

export default ProductCard
