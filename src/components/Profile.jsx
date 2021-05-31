import React, { useContext } from 'react'
import { LoginContext } from '../context/usercontext'

function Profile() {
    let {user} = useContext(LoginContext)
    return (
        <div>
            <h1>Welcome</h1>
            <h2>{user}</h2>
        </div>
    )
}

export default Profile
