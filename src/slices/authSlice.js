import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const signUp = createAsyncThunk(
  'global/createUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/users`)

      const findedUser = data.find(
        (item) =>
          item.email === userData.email && item.password === userData.password,
      )
      if (findedUser) {
        throw new Error('Пользователь уже существует')
      }

      const resp = await axios.post(`http://localhost:3001/users`, userData)
      return resp.data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

const initialState = {
  isAuth: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      console.log('register')
    },
    login: (state, action) => {
      // Сохраняем пользователя и аутентификацию в состоянии
      state.isAuth = true
      state.user = action.payload
      // Сохраняем в localStorage для сохранения данных при перезагрузке
      localStorage.setItem('user', JSON.stringify(action.payload))
      localStorage.setItem('isAuth', 'true')
    },
    logout: (state) => {
      state.isAuth = false
      state.user = null
      // Удаляем данные пользователя из localStorage при выходе
      localStorage.removeItem('user')
      localStorage.removeItem('isAuth')
    },
    checkIsAuth: (state) => {
      // Проверяем есть ли информация в localStorage при старте приложения
      const isAuth = localStorage.getItem('isAuth') === 'true'
      state.isAuth = isAuth
      if (isAuth) {
        state.user = JSON.parse(localStorage.getItem('user'))
      } else {
        state.user = null
      }
    },
  },
})

export const { login, logout, checkIsAuth, register } = authSlice.actions
export default authSlice.reducer
