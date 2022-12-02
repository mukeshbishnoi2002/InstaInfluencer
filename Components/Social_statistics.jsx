import React from 'react'
import Cardreuse from './Cardreuse'
import Image from 'next/image'
import { Social_statistics_information } from '../Utility/Cards'
function Social_statistics() {
  return (
    <div className='social_statistics'>
      <div className='social_statistics_info'>
        <h1 className='influencer_info_heading'>Social Statistics</h1>
        <p className='social_statistics_heading_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='influencer_card'>
          {
            Social_statistics_information.map((items, index) => {
              const { id, suscriber, platform, icon, influencer_name, dec } = items;
              return (
                <Cardreuse key={id} suscriber={suscriber} platform={platform} icon={icon} influencer_name={influencer_name} dec={dec}  />
              )
            })
          }

        </div>
        <Image src="/Images/insta-shape1.png" width={400} height={400} className="cards_background_effect" alt='social_statistics_shape'></Image>
      </div>
    </div>
  )
}

export default Social_statistics