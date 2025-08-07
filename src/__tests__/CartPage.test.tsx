import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import CartPage from '../pages/CartPage'

const mockStore = configureStore([])
const productsData = require('../data/products.json')
jest.mock('../assets/image-product.jpg', () => '')

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

describe('CartPage', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('display message and button when cart is empty', () => {
    const store = mockStore({
      cart: { items: [] },
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CartPage />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText(/tu carrito está vacío/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /volver al catálogo/i })).toBeInTheDocument()
  })

  test('display products in cart, total and buttons', () => {
    const cartItems = [
      { productId: productsData.productos[0].id },
      { productId: productsData.productos[1].id },
    ]

    const store = mockStore({
      cart: { items: cartItems },
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CartPage />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByRole('heading', { name: /carrito/i })).toBeInTheDocument()

    expect(screen.getByText(productsData.productos[0].title)).toBeInTheDocument()
    expect(screen.getByText(productsData.productos[1].title)).toBeInTheDocument()

    const total = productsData.productos[0].price + productsData.productos[1].price
    expect(screen.getByText(`$ ${total}`)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /volver al catálogo/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /finalizar compra/i })).toBeInTheDocument()
  })

  test('Navigate to checkout by clicking "Finalizar compra"', () => {
    const cartItems = [{ productId: productsData.productos[0].id }]

    const store = mockStore({
      cart: { items: cartItems },
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CartPage />
        </MemoryRouter>
      </Provider>
    )

    const checkoutButton = screen.getByRole('button', { name: /finalizar compra/i })
    fireEvent.click(checkoutButton)

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/checkout')
  })
})
