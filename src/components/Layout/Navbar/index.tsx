import { useSelector } from 'react-redux'
import type { RootState } from '../../../store'
import { Link } from 'react-router-dom'
import { NavbarWrapper, Logo, Info } from './styles'

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user)
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const totalItems = cartItems.length

  return (
    <NavbarWrapper>
      <Logo>
        <Link to="/">Tienda de productos</Link>
      </Logo>

      <Info>
        {user && <span>{user.firstName}</span>}
        <Link to="/cart" aria-label="Ver carrito">
          Carrito ({totalItems})
        </Link>
        <span>
          Crédito {user.credit.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
        </span>
      </Info>
    </NavbarWrapper>
  )
}

export default Navbar
