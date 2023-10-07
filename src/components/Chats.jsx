import React from 'react'
import myAvatar from '../images/myAvatar.jpg'




const Chats = () => {
  return (
    <div className='chats'>
            <div className="userChat">
        <img src={myAvatar} />
        <div className='userChatInfo'>
          <span>Valeria</span>
          <p>Hello</p>
        </div>

      </div>
      

      <div className="userChat">
        <img src={myAvatar} />
        <div className='userChatInfo'>
          <span>Valeria</span>
          <p>Hello</p>
        </div>

      </div>


      <div className="userChat">
        <img src={myAvatar} />
        <div className='userChatInfo'>
          <span>Valeria</span>
          <p>Hello</p>
        </div>

      </div>

      


    </div>
  )
}

export default Chats