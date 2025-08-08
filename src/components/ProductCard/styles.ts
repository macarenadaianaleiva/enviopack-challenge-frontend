import styled from 'styled-components'

export const CardWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 160px;
  object-fit: contain;
`

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-weight: 500;
`

export const Price = styled.p`
  font-weight: 500;
  margin: 0.25rem 0;
  font-size: 1.2rem;
`

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
`
