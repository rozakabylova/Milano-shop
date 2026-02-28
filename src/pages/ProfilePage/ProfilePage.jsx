import UserProfile from 'components/UserProfile/UserProfile'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { login } from '../../slices/authSlice'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Пример получения данных с API или другого источника
    const fetchUserData = async () => {
      const response = await fetch('http://localhost:8080/user')
      const data = await response.json()
      setUser(data)
      dispatch(login(data))
    }

    fetchUserData()
  }, [])

  return (
    <div>
      <h1>Профиль</h1>
      <UserProfile user={user} />
    </div>
  )
}

export default ProfilePage
