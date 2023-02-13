import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserPayloadObject } from '../interfaces'

interface AdminState {
  admin?: {
    name?: string
    email?: null | string
    avatar?: null | string
  }
  adminLoggedIn: boolean
  adminError?: {    // has to redefine after get error object from api call
    email?: string
    password?: string
  },
  adminLoading: boolean
}

const initialState: AdminState = {
  /* User */
  admin: {},
  adminLoggedIn: false,
  adminError: null,
  adminLoading: false
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<UserPayloadObject>) => {
      state.admin = action.payload.admin ? action.payload.admin : {}
      state.adminLoggedIn = !!Object.keys(state.admin).length
      state.adminError = action.payload.error
      state.adminLoading = action.payload.loading
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAdmin } = adminSlice.actions

export default adminSlice.reducer
