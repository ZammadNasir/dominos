import React from 'react'

export const TopBar = () => {
  return (
    <div className='top-bar'>
        <div className='container'>
            <div className='top-bar-inner'>
                <div className='top-bar-add'>
                  <p>You're invited to the <span>Ultimate Pizza Party</span> 40% Off </p>
                </div>
                <div className='middle-bar'>
                  <div>
                    <img src='../assets/icons/oven.png' width={20}/>
                  <p>Stores</p>
                  </div>
                  <div>
                  <p>Eng <i className="fa-solid fa-chevron-down"></i></p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
