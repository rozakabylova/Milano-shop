import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  user: null,
  status: 'idle',
  error: null,
}

export const updateCartOnServer = createAsyncThunk(
  'cart/updateCartOnServer',
  async (userId, { getState, rejectWithValue }) => {
    try {
      const state = getState()
      const cart = state.cart.items

      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...state.user.user, basket: cart }),
      })

      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to update user cart')
      }

      return await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existingItem = state.items.find((i) => i.id === item.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      state.items = state.items.filter((item) => item.id !== id)
    },
    increaseQuantity: (state, action) => {
      const id = action.payload
      const item = state.items.find((item) => item.id === id)
      if (item) item.quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload
      const item = state.items.find((item) => item.id === id)
      if (item && item.quantity > 1) item.quantity -= 1
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateCartOnServer.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateCartOnServer.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(updateCartOnServer.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setUser,
} = cartSlice.actions
export default cartSlice.reducer
