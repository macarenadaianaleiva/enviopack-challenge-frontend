import styled from 'styled-components'

export const NavbarWrapper = styled.header`
  background-color: black;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`
