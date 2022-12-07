import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Influencer_about_me() {
  return (
   <div className='Influencer_about_me'>
            <div className='Influencer_about_me_card_one' data-aos="fade-right">
                    <Image src="/Images/insta-about1.png" width={500} height={400} className="insta-about" alt='Influencer_about_me_one'></Image>
                    <Image src="/Images/insta-about-shape1.png" width={182} height={211} className="insta-about-shape1" alt='Influencer_about_me_two'></Image>
                    <Image src="/Images/insta-about-shape2.png" width={264} height={153} className="insta-about-shape2" alt='Influencer_about_me_three'></Image>
                   
                    
            </div>
            <div className='Influencer_about_me_card_two'>
                <p data-aos="fade-down">ABOUT ME</p>
                <h1 data-aos="fade-right" data-aos-delay="100">I'm a Instagram influencer designer running my own design</h1>
                <p data-aos="fade-right" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <div className='one' data-aos="fade-down">
                        <button >Contact Me</button>
                        <span><Link href="#">hello@alikamaya.com</Link> </span>
                    </div>
            </div>
   </div>
  )
}

export default Influencer_about_me