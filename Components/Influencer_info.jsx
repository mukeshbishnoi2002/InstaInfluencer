import React from 'react'
import Image from 'next/image';
import Cardreuse from './Influencer_details'
import { influencer_information } from '../Utility/Cards'
function Influencer_info() {
  return (
    <div className='influencer'>
      <div className='influencer_info'>
        <p className='what_do' data-aos="fade-down">WHAT DO I LOVE</p>
        <h1 className='influencer_info_heading' data-aos="fade-right">I'm a Instagram influencer designer running my own design studio</h1>
        <div className='influencer_card'>
          {
            influencer_information.map((items, key) => {
              const { id, suscriber, platform, icon, influencer_name, dec, color } = items;
              

              return (
                <Cardreuse id={id} key={key} suscriber={suscriber} platform={platform} icon={icon} influencer_name={influencer_name} dec={dec} color={color}/>
              )
            })
            
          }

        </div>
        <Image src="/Images/insta-shape1.png" width={400} height={400} className="cards_background_effect" alt='influencer' data-aos="fade-right"></Image>
      </div>

    </div>
  )
}

export default Influencer_info