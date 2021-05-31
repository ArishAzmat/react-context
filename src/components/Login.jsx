import React, { useContext } from 'react'
import { LoginContext } from '../context/usercontext'

function Login() {

const {setUser,setIsloggedin,isloggedin}  = useContext(LoginContext)
console.log('sadasdasdsad',isloggedin)
    return (
        <div>
          <input type="text" placeholder="username" onChange={(e)=> {setUser(e.target.value)}} />
          <br />
          <input type="text" placeholder="password" />
          <br />
          <button className='btn btn-light' onClick={()=>{setIsloggedin(true)}}>Login</button>
       
        </div>
    )
}

export default Login
