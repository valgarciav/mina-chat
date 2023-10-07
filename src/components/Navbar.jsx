import React from 'react'
import myAvatar from "../images/myAvatar.jpg"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'


function Navbar() {
  return (
    <div className="navbar">
        <span className='logo'>Mina Chat</span>
        <div className="user">
            <img src={myAvatar} alt="" />
            <span>Valeria</span>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}


export default Navbar