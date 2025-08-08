import { useSelector } from 'react-redux'
import type { RootState } from '../../../store'
import { Link } from 'react-router-dom'
import {
  NavbarWrapper,
  Logo,
  Info,
  HamburgerButton,
  MobileMenu,
  Overlay,
  CloseButton,
} from './styles'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user)
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const totalItems = cartItems.length

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <NavbarWrapper>
      <Logo>
        <Link to="/">Tienda de productos</Link>
      </Logo>

      <HamburgerButton
        onClick={() => setIsMenuOpen(true)}
        aria-label="Abrir menú"
        $isHidden={isMenuOpen}
      >
        <FiMenu />
      </HamburgerButton>

      <Info>
        {user && <span>{user.firstName}</span>}
        <Link to="/cart" aria-label="Ver carrito">
          Carrito ({totalItems})
        </Link>
        <span>
          Crédito{' '}
          {user.credit.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS',
          })}
        </span>
      </Info>

      {isMenuOpen && (
        <>
          <Overlay onClick={handleCloseMenu} />
          <MobileMenu>
            <CloseButton onClick={handleCloseMenu} aria-label="Cerrar menú">
              <FiX />
            </CloseButton>

            {user && <span>{user.firstName}</span>}
            <Link to="/cart" onClick={handleCloseMenu}>
              Carrito ({totalItems})
            </Link>
            <span>
              Crédito{' '}
              {user.credit.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
              })}
            </span>
          </MobileMenu>
        </>
      )}
    </NavbarWrapper>
  )
}

export default Navbar
