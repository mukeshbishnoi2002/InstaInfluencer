import React from 'react'
import Image from 'next/image'
function Showreel() {
  return (
   <div className='show'>
     <div className='showreel'>
      <div className='showreel_card_first'>
        <div className='showreel_card_first_inner'>
          <p className='showreel-tag' data-aos="fade-right" data-aos-delay="100">SHOWREEL</p>
          <h1 data-aos="fade-right" data-aos-delay="200">Want to stick out in a saturated market?</h1>
          <p data-aos="fade-right" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
          <div className='playicon' data-aos="fade-right" data-aos-delay="400">
            <i className="fa-solid fa-play"></i><span className='watch-video'>Watch Video</span>
          </div>
        </div>
      </div>
      <div className='showreel_card_second' data-aos="fade-down">
        <Image src="/Images/video-img.jpg" width={538} height={350} alt="video-img" className='video-img'></Image>
      </div>
    </div>
   </div>
  )
}

export default Showreel