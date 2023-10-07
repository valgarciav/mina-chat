import React from 'react'
import myAvatar from '../images/myavatar.jpg'


function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src={myAvatar} />
        <div className='userChatInfo'>
          <span>Valeria</span>
        </div>

      </div>
    </div>
  )
}

export default Search