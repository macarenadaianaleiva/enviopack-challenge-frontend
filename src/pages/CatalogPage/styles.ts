import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 1rem;
  max-width: 950px;
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
  align-items: flex-end;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 0 0.5rem;

  input {
    width: 220px;
    padding: 0.5rem 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 0.9rem;
    background-color: #ecedeeff;
  }

  div {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
  }
  label {
    font-size: 0.8rem;
    font-weight: regular;
    color: #838383ff;
  }

  select {
    width: 150px;
    margin-top: 0.25rem;
    padding: 0.5rem 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 0.9rem;
    background-color: #ecedeeff;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    input,
    select {
      width: 100%;
      max-width: 220px;
    }

    select {
      width: 100%;
      max-width: 150px;
    }

    div {
      align-items: center;
    }
  }
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`

export const CardContainer = styled.div`
  flex: 1 1 30%;
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    flex: 1 1 45%;
    max-width: 280px;
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
    max-width: 280px;
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
      background-color: #dedfe1ff;
    }
  }
`
