import { Link } from 'react-router-dom'
import { NavbarWrapper } from './styles'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        Tienda de productos
      </Link>
      <div>
        Juan Ignacio | <Link to="/cart">Carrito(0)</Link> | Crédito $50000
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
