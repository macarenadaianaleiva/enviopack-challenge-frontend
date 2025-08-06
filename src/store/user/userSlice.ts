import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  id: number
  username: string
  firstName: string
  lastName: string
  credit: number
}

const initialState: UserState = {
  id: 10982,
  username: 'juanignacio',
  firstName: 'Juan Ignacio',
  lastName: 'Fernandez',
  credit: 50000,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCredit: (state, action: PayloadAction<number>) => {
      state.credit = action.payload
    },
  },
})

export const { updateCredit } = userSlice.actions
export default userSlice.reducer
