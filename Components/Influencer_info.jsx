import React from 'react'
import Image from 'next/image';
import { influencer_information } from '../Utility/Cards'
function Influencer_info() {
  return (
  <div className='influencer'>
     <div className='influencer_info'>
     <p className='what_do'>WHAT DO I LOVE</p>
     <h1 className='influencer_info_heading'>I'm a Instagram influencer designer running my own design studio</h1>
     <div className='influencer_card'>
       {
         influencer_information.map((items, index) => {
           const { id, suscriber, platform, icon, influencer_nanme, dec, color } = items;
           return (
             <div className='card' key={id}>
             
               <p className='suscriber'>{suscriber}K</p>
               <p className='platform'>{platform} followers</p>
               <i className={icon} style={{color:color}}></i>
               <span> @{influencer_nanme}</span>
               <hr className='line_of_card'/>
               <p className='dec'>{dec}</p>
               <div className='effect'></div>
             </div>
           )
         })
       }
      
     </div>
     <Image src="/Images/insta-shape1.png" width={400} height={400} className="cards_background_effect"></Image>
   </div>

  </div>
  )
}

export default Influencer_info