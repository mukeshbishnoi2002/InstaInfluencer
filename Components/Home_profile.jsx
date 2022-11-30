import React from 'react'

import Header from './Header'
import Hero from './Hero'
import Influencer_info from './Influencer_info';
import Influencer_about_me from './Influencer_about_me';

function Home() {
  // const { id, suscriber, platform, icon, influencer_nanme, dec, color } = influencer_information;
  return (
   <>
        <Header />
        <Hero />
        <Influencer_info />
        {/* id={id} suscriber={suscriber} platform={platform} icon={icon} influencer_nanm={influencer_nanme} dec={dec} color={color} */}
        <Influencer_about_me />
   </>
  )
}

export default Home