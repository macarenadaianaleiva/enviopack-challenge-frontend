import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 1rem;
  max-width: 700px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const Summary = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`


export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.85;
  }
`

