import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 1rem;
  max-width: 700px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  h2 {
    text-align: center;
  }
`

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const Summary = styled.div`
  padding: 1rem;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(39, 41, 49, 0.25);
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
  font-weight: regular;

  &:hover {
    opacity: 0.85;
  }
`

export const EmptyCartActions = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  a {
    width: 100%;
    max-width: 300px;
  }

  button {
    width: 100%;
  }
`
