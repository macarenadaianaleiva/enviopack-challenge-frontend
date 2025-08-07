import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
`

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 0.5rem;

  input {
    flex: 1;
    max-width: 250px;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.9rem;
    font-weight: bold;
  }

  select {
    width: 180px;
    margin-top: 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;

    input,
    select {
      width: 100%;
      max-width: 100%;
    }

    div {
      align-items: stretch;
    }
  }
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
`

export const CardContainer = styled.div`
  flex: 1 1 calc(33.333% - 16px);
  max-width: calc(33.333% - 16px);
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    flex: 1 1 calc(50% - 8px);
    max-width: calc(50% - 8px);
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`

export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  button {
    padding: 0.5rem 0.75rem;
    border: 1px solid #333;
    background-color: #fff;
    color: #000;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: #000;
      color: #fff;
    }

    &:disabled {
      background-color: #ddd;
      color: #666;
      cursor: default;
    }
  }
`
