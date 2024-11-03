import React,{useState} from 'react'
import './ChatList.css'

const ChatList = () => {

  const [addMode,setAddMode] = useState(false);




  return (
    <div className='chat-list'>
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
          <img className='plus' src={addMode ? "/minus.png" : "/plus.png"} alt="" onClick={() => setAddMode((prev) => !prev)}/>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="text">
          <span>Sanu Kumar</span>
          <p>Hi there, how are you?</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList