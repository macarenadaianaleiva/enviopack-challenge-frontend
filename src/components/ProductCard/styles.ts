import styled from 'styled-components'

export const CardWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 160px;
  object-fit: contain;
`

export const Title = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
`

export const Price = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`
