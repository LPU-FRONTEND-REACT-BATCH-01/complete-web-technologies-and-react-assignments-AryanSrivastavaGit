import React from 'react'
import { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({children}) => {

    const [user, setUser] = useState("Aryan");

    const [count, setCount] = useState(0);

    let handleInc = () => {
        setCount(prev => prev + 1);
    }

    let handleDec = () => {
        setCount(prev => prev - 1);
    }

    let handleReset = () => {
        setCount(0);
        setUser("Aryan")
    }

    return (
        <UserContext.Provider value={{ user, setUser, count, handleInc, handleDec, handleReset }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider