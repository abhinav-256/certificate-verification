import React from 'react'
import './Upload.scss'
import {images} from "../../constants" 
function Login() {
  return (
<div className="app__header app__flex">
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Upload</p>
            <h1 className="head-texter">We make it possible!</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">See below</p>
        </div>
      </div>
   

      <img src={images.node} alt="profile_bg" />


  </div>
  )
}

export default Login