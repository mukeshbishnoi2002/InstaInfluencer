
import React, { useEffect, useRef } from 'react'

function Header() {
  const navBarFixed = useRef(null)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if(window.scrollY >= 200){
      navBarFixed.current.classList.add("stick")
    }
    else{
      navBarFixed.current.classList.remove("stick")
    }
  };
  return (
    <div className='main_header ' ref={navBarFixed}>
        <div className='nav '>
            <h2>Influencer</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Social Statistics</li>
                <li>Instagram Audience</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
   
  )
}

export default Header