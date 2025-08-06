import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarWrapper = styled.nav`
  background-color: #111;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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
