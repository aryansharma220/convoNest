import React from 'react'
import './details.css'

const Details = () => {
  return (
    <div className='details'>
      <div className="user">
        <img src="/avatar.png" alt="" />
        <h2>Aryan Sharma</h2>
        <p>Hi there, how are you?</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
          </div>
            <img src="/arrowUp.png" alt="" />
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
          </div>
            <img src="/arrowUp.png" alt="" />
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
          </div>
            <img src="/arrowUp.png" alt="" />
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="/avatar.png" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="/arrowDown.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Details