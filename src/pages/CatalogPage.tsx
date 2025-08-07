import { useState, useMemo } from 'react'
import dataJSON  from '../data/products.json'
import ProductCard from '../components/ProductCard'
import styled from 'styled-components'
import type { Product } from '../types/product'

const data = dataJSON.productos
const PRODUCTS_PER_PAGE = 6

const CatalogPage = () => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [page, setPage] = useState(1)

  const filteredProducts = useMemo(() => {
    let result = data.filter((p: Product) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )

    if (sort === 'cheap') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'expensive') result = [...result].sort((a, b) => b.price - a.price)

    return result
  }, [search, sort])

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE)
  }, [filteredProducts, page])

  return (
    <Wrapper>
      <h1>Catálogo</h1>
      <Controls>
        <input
          type="text"
          placeholder="Buscar productos por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="">Seleccionar</option>
          <option value="cheap">Más baratos</option>
          <option value="expensive">Más caros</option>
        </select>
      </Controls>

      <Grid>
        {paginatedProducts.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Grid>

      <Pagination>
        {Array.from({ length: Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE) }).map(
          (_, i) => (
            <button key={i} onClick={() => setPage(i + 1)} disabled={page === i + 1}>
              {i + 1}
            </button>
          )
        )}
      </Pagination>
    </Wrapper>
  )
}

export default CatalogPage

const Wrapper = styled.div`
  padding: 2rem;
`

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`

const Pagination = styled.div`
  margin-top: 2rem;
  button {
    margin-right: 0.5rem;
    padding: 0.5rem;
  }
`
