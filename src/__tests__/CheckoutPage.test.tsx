import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'

jest.mock('../data/products.json', () => ({
  productos: [{ id: 1, name: 'Producto de prueba', price: 100 }],
}))

import CheckoutPage from '../pages/CheckoutPage'

const mockStore = configureStore([])

describe('CheckoutPage', () => {
  it('displays successful purchase message if there is sufficient credit', () => {
    const store = mockStore({
      cart: { items: [{ productId: 1 }] },
      user: { credit: 9999 },
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CheckoutPage />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText(/La compra se realizó con éxito/i)).toBeInTheDocument()
  })

  it('displays error message if there is not enough credit', () => {
    const store = mockStore({
      cart: { items: [{ productId: 1 }] },
      user: { credit: 0 },
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CheckoutPage />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText(/Ocurrió un error con la compra/i)).toBeInTheDocument()
  })
})
