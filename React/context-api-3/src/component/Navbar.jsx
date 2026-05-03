import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
    const {user} = useContext(UserContext)
  return (
    <div>Welcome, {user}</div>
  )
}

export default Navbar