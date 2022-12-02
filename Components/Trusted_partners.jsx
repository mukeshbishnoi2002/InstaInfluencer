import React from 'react'
import Image from 'next/image'
function Trusted_partners() {
  return (
    <div className='trusted_partners'>
       <div className='trusted_partners_heading'>
       <h2>Trusted Partners</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </div>
        <div className='platform_icons'>
          {}
          <div><Image src="/Images/insta-partner1.png" width={200} height={150}></Image></div>
          {/* <div><Image src="/Images/insta-partner1.png"></Image></div>
          <div><Image src="/Images/insta-partner1.png"></Image></div>
          <div><Image src="/Images/insta-partner1.png"></Image></div>
          <div><Image src="/Images/insta-partner1.png"></Image></div>
          <div><Image src="/Images/insta-partner1.png"></Image></div>
          <div><Image src="/Images/insta-partner1.png"></Image></div>
          <div><Image src="/Images/insta-partner1.png"></Image></div> */}
        </div>
    </div>
  )
}

export default Trusted_partners