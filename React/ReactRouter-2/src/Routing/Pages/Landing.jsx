import React from 'react'
import { useNavigate } from 'react-router'

const Landing = () => {
  const navigate = useNavigate();
  let handleSignUp = () =>{
    navigate('/signup')
  }
  let handleLogin = () =>{
    navigate('/login')
  }
  return (
    <div>
      <div>
        <button onClick={handleSignUp}>SignUp</button>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>Landing</div>
    </div>
  )
}

export default Landing