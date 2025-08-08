import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CatalogPage from '../pages/CatalogPage'
import { Provider } from 'react-redux'
import { store } from '../store'

jest.mock('../assets/image-product.jpg', () => '')

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  )
}

describe('CatalogPage', () => {
  test('render title and controls', () => {
    renderWithProviders(<CatalogPage />)

    expect(screen.getByRole('heading', { name: /catálogo/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/buscar productos por nombre/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/ordenar por/i)).toBeInTheDocument()
  })

  test('sample products (maximum 6 per page)', async () => {
    renderWithProviders(<CatalogPage />)

    const buttons = await screen.findAllByText(/Agregar al carrito/i)

    expect(buttons.length).toBeGreaterThan(0)
    expect(buttons.length).toBeLessThanOrEqual(6)
  })
})
