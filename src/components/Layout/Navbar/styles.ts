import styled from 'styled-components'
interface HamburgerButtonProps {
  $isHidden?: boolean
}

export const NavbarWrapper = styled.header`
  background-color: black;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
`

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  a {
    color: white;
    text-decoration: none;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  span,
  a {
    font-size: 1rem;
    color: white;
    text-decoration: none;
  }

  a {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const HamburgerButton = styled.button<HamburgerButtonProps>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isHidden }) => ($isHidden ? 'none' : 'block')};
    background: none;
    border: none;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 1100;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
`

export const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: fadeIn 0.3s ease-in-out;
  z-index: 1050;

  span,
  a {
    color: white;
    font-size: 1.25rem;
    text-decoration: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;

  @media (min-width: 769px) {
    display: none;
  }
`
