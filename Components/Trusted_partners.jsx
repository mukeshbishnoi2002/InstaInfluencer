import React from 'react'
import Image from 'next/image'
import { Trusted_platform_icons } from '../Utility/Cards'
function Trusted_partners() {
  return (
    <div className='trusted_partners'>
       <div className='trusted_partners_heading'>
       <h2 data-aos="fade-left">Trusted Partners</h2>
        <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </div>
        <div className='platform_icons'>
          {
            Trusted_platform_icons.map((items , index)=>{
          return (<div key={items.id}><Image src={items.icon} width={180} height={60} alt="insta-partner" className='insta-partner_images'></Image></div>)

            })
          }
        </div>
    </div>
  )
}

export default Trusted_partners