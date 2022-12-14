import React from 'react'

function Cardreuse({ id, suscriber, platform, icon, influencer_name, dec, color}) {
    
           return (
             <div className='card'  data-aos={id == 0 ? "fade-right" : id == 1 ? "fade-up" : "fade-right"} data-aos-duration="800">
               <p className='suscriber'>{suscriber}K</p>
               <p className='platform'>{platform} followers</p>
               <i className={icon} style={{color:color}}></i>
               <span> @{influencer_name}</span>
               <hr className='line_of_card'/>
               <p className='dec'>{dec}</p>
               <div className='effect'></div>
             </div>
             
             )
}

export default Cardreuse