import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Login from './components/Login'
import {LoginContext} from './context/usercontext'
import { useState } from "react";
import Profile from './components/Profile'
import Code from "./components/Code";
function App() {
  const [user, setUser] = useState()
  const [isloggedin, setIsloggedin] = useState(false)
  console.log('sssssss',isloggedin)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ContextAPI</p>
        <LoginContext.Provider value={{user,setIsloggedin,setUser,isloggedin}}>
         { isloggedin? <Profile/>: <Login/> }
        </LoginContext.Provider>
        <Code/>
      </header>
    </div>
  );
}

export default App;
