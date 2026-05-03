import React from 'react'
import { useState } from 'react';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
// import { UserContext } from './context/UserContext';
import UserProvider from './context/UserProvider';

const App = () => {

  // const [user, setUser] = useState("Aryan");

  // const [count, setCount] = useState(0);

  // let handleInc = () =>{
  //   setCount(prev => prev+1);
  // }

  // let handleDec = () =>{
  //   setCount(prev => prev-1);
  // }

  // let handleReset = () => {
  //   setCount(0);
  //   setUser("Aryan")
  // }

  return (
    <UserProvider>
      <Navbar />
      <Profile />
    </UserProvider>
    // <UserContext.Provider value={{ user, setUser, count, handleInc, handleDec, handleReset}}>
    //   <Navbar />
    //   <Profile />
    // </UserContext.Provider>
  )
}

export default App