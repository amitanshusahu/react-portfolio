import React from 'react'
import { StyledHeader } from './style/Header.style';
import profile from "../assets/profile.jpeg";
import { HeaderImg } from './HeaderImg';


export default function Header() {
  return (
    <StyledHeader>
      <HeaderImg/>
        <div className="gradient">
        <div className="container">
          <div className="dp-holder">
            <img src={profile} alt="amitanshu sahu profile picture " />
          </div>
          <div className="profile-content">
            <h1>👋 it's</h1>
            <h1 className='name'>Amitanshu Sahu</h1>
            <h2> Web Devloper</h2>
          </div>
          <div className="btn-holder">
            {/* <button className="explore">Expore</button> */}
            <button>Let's Connect</button>
          </div>
        </div>
        </div>
    </StyledHeader>
  )
}

