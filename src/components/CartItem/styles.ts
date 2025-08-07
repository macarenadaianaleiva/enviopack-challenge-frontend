import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1rem;
  background-color: #fff;
  border-radius: 6px;
  padding: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`

export const ContentBox = styled.div`
  flex: 1;
  background-color: #f1f3f5;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
    position: relative;
  }
`

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`

export const Title = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: normal;

  @media (max-width: 500px) {
    padding-right: 2rem;
  }
`

export const Price = styled.p`
  font-weight: bold;
  margin: 0;
`

export const RemoveButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 0.35rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 500px) {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.85rem;
  }
`
