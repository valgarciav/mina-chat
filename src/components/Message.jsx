import React from 'react'
import myAvatar from "../images/myAvatar.jpg"
function Message() {
  return (
    <div className="message owner">
        <div className="messageInfo">
            <img src={myAvatar} alt="" />
            <span>Just Now</span>
          
        </div>

        <div className="messageContent">
            <p>
                Hello
            </p>
            <img src={myAvatar} alt="" />
        </div>

    </div>
  )
}

export default Message