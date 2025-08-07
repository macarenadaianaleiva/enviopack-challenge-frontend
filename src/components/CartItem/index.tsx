import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/cart/cartSlice'
import type { Product } from '../../types/product'
import { Wrapper, Image, Info, Title, Price, RemoveButton } from './styles'
import ProductImage from '../../assets/image-product.jpg'

interface Props {
  product: Product
}

const CartItem = ({ product }: Props) => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Image src={ProductImage} alt={product.title} />
      <Info>
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
      </Info>
      <RemoveButton onClick={() => dispatch(removeFromCart(product.id))}>
        Eliminar
      </RemoveButton>
    </Wrapper>
  )
}

export default CartItem
