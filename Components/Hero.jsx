import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='hero_content'>
          <h1>Hi, I'M <br />Alika Maya</h1>
          <p>A Photographer & Business Strategist who empowers<br />entrepreneurs to build a brand, market it on social<br />media, and create a life they love.</p>
          <div>
            <input type="text" placeholder='Enter Your Email Address'/> <button>Join with me now</button>
          </div>
        </div>
        <div className='hero_bg'>
        
        <Image src="/Images/background.png" height={600} width={500} className="hero_img" alt=""></Image>

        </div>
      </div>
    </>
  )
}

export default Hero