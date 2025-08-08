import { useState, useMemo } from 'react'
import dataJSON from '../../data/products.json'
import ProductCard from '../../components/ProductCard'
import type { Product } from '../../types/product'
import { CardContainer, Controls, Grid, Pagination, Wrapper } from './styles'

const data = dataJSON.productos
const PRODUCTS_PER_PAGE = 6

const CatalogPage = () => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [page, setPage] = useState(1)

  const filteredProducts = useMemo(() => {
    let result = data.filter((p: Product) => p.title.toLowerCase().includes(search.toLowerCase()))

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
        <div>
          <label htmlFor="sort-select">ORDENAR POR</label>
          <select onChange={(e) => setSort(e.target.value)} value={sort} id="sort-select">
            <option value="">Seleccionar</option>
            <option value="cheap">Más baratos</option>
            <option value="expensive">Más caros</option>
          </select>
        </div>
      </Controls>

      <Grid>
        {paginatedProducts.map((p: Product) => (
          <CardContainer key={p.id}>
            <ProductCard product={p} />
          </CardContainer>
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
