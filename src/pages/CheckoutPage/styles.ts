import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`

export const Card = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  text-align: center;
  max-width: 500px;
  width: 100%;
`

export const Message = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.85;
  }
`
