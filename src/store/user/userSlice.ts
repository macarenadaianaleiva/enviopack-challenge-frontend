import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import profileData from '../../data/profile.json'

interface UserState {
  id: number
  username: string
  firstName: string
  lastName: string
  credit: number
}

const initialState: UserState =  profileData.profile

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
