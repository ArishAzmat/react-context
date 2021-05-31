import React from 'react'
import { Link } from 'react-router-dom'
function Main() {
    return (
        <div>
             <form>
                <input type="text" placeholder="username" /><br />
                <input type="text" placeholder="password" /><br />
                <button>    
                    Login
                </button>
             </form>
        </div>
    )
}
export default Main
