import React from 'react'
import Image from 'next/image';
import Cardreuse from './Influencer_details'
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
              const { id, suscriber, platform, icon, influencer_name, dec, color } = items;
              return (
                <Cardreuse key={id} suscriber={suscriber} platform={platform} icon={icon} influencer_name={influencer_name} dec={dec} color={color} />
              )
            })
            
          }

        </div>
        <Image src="/Images/insta-shape1.png" width={400} height={400} className="cards_background_effect" alt='influencer'></Image>
      </div>

    </div>
  )
}

export default Influencer_info