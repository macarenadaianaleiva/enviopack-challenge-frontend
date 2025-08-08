import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice'
import userReducer from './user/userSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
})

function loadState() {
  try {
    const serializedState = localStorage.getItem('reduxState')
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch {
    return undefined
  }
}

function saveState(state: RootState) {
  try {
    const serializedState = JSON.stringify({
      cart: state.cart,
      user: state.user,
    })
    localStorage.setItem('reduxState', serializedState)
  } catch {}
}

store.subscribe(() => {
  saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
