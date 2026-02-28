import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { login } from '../slices/authSlice'

import { Footer } from '@/common/components/Footer'
import { Header } from '@/common/components/Header'

const Layout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    dispatch(login(user))
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
