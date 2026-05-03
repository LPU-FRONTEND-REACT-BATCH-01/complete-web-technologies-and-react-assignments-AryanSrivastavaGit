import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
    const { user, setUser, count, handleInc, handleDec, handleReset } = useContext(UserContext);
    return (
        <div>
            <h1>Profile Page</h1>
            <p>User: {user}</p>
            <button onClick={() => setUser("John")}>
                Change User
            </button>


            <h1>{count}</h1>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>

            <br />
            <br />
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Profile