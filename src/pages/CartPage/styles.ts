import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem;
`

export const ItemList = styled.div`
  margin-bottom: 2rem;
`

export const Summary = styled.div`
  font-size: 1.2rem;
`

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

export const Button = styled.button`
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
