import React from 'react'
import "../style.scss"
import Add from '../images/addAvatar.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Mina Chat</span>
            <span className="title">Register</span>

            <form>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            
            <button>Sign uInp</button>

                
                </form>
                
                <p>You dom't have an account? Register </p>
                </div>
    </div>
  )
}

export default Login