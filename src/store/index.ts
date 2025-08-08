import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice'
import userReducer from './user/userSlice'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState')
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify({
      cart: state.cart,
      user: state.user,
    })
    localStorage.setItem('reduxState', serializedState)
  } catch {}
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
  preloadedState: loadState(),
})

store.subscribe(() => {
  saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
