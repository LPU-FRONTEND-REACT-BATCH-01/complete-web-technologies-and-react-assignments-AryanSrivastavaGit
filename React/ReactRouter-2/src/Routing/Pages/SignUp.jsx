import React from 'react'
import { Navigate, useNavigate } from 'react-router';
import Profile from './Profile';

const SignUp = () => {
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        navigate("/profile")
    }
    // const isAuthenticated = true

    // if (isAuthenticated) {
    //         return <Navigate to={'/profile'} />
    //         // return <Profile/>
    // }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignUp