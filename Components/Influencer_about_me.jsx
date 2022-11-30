import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Influencer_about_me() {
  return (
   <div className='Influencer_about_me'>
            <div className='Influencer_about_me_card_one'>
                    <Image src="/Images/insta-about1.png" width={500} height={400} className="insta-about"></Image>
                    <Image src="/Images/insta-about-shape1.png" width={182} height={211} className="insta-about-shape1"></Image>
                    <Image src="/Images/insta-about-shape2.png" width={264} height={153} className="insta-about-shape2"></Image>
                   
                    
            </div>
            <div className='Influencer_about_me_card_two'>
                <p>ABOUT ME</p>
                <h1>I'm a Instagram influencer designer running my own design</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <div className='one'>
                        <button>Contact Me</button>
                        <span><Link href="#">hello@alikamaya.com</Link> </span>
                    </div>
            </div>
   </div>
  )
}

export default Influencer_about_me