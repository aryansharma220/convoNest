import React,{ useState, useRef, useEffect } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'


const chat = () => {

  const [open, setOpen] =useState(false);
  const [message, setMessage] = useState('');
  const pickerRef = useRef(null);


  const handleEmojiClick = (emoji) => {
    setMessage(prev => prev + emoji.emoji);
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);




  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="" />
          <div className="text">
            <span>Sanu Kumar</span>
            <p>Online</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="" />
          <img src="/video.png" alt="" />
          <img src="/info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="text">
            <p>Hello</p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message owner">
          <div className="text">
            <img src="/public/theme.png" alt="" />
            <p>Hello</p>
            <span>1 minute ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/img.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/mic.png" alt="" />
        </div>
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Type something...' />
        <div className="emoji">
          <div className="picker" ref={pickerRef}>
          {open && <EmojiPicker onEmojiClick={handleEmojiClick} />}
          </div>
          <img onClick={() => setOpen((prev) => !prev)} src="/emoji.png" alt="" />
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default chat