import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 1rem;
`

export const Info = styled.div`
  flex: 1;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
`

export const Price = styled.p`
  font-weight: bold;
`

export const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
