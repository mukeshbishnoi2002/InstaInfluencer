import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Influencer_info from './Influencer_info';
import Influencer_about_me from './Influencer_about_me';
import Social_statistics from './Social_statistics'

function Home() {
  return (
   <>
        <Header />
        <Hero />
        <Influencer_info />
        <Influencer_about_me />
        <Social_statistics />
   </>
  )
}

export default Home