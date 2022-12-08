import Image from 'next/image'
import { useState,useEffect } from 'react'
function Hero() {
  const [isShown, setIsShown] = useState(false);
  



useEffect(() => {
  

 
}, [])



  return (
    <>

      <div className='hero'>

        <div className='hero_content' >
          <h1 data-aos="fade-right" data-aos-delay="100">Hi, I'M Alika Maya</h1>
          <p data-aos="fade-right" data-aos-delay="200">A Photographer & Business Strategist who empowers entrepreneurs to build a brand, market it on social media, and create a life they love.</p>
          <div data-aos="fade-right" data-aos-delay="300">
            <input type="text" placeholder='Enter Your Email Address' /> <button>Join with me now</button>
          </div>
        </div>
        <div className='hero_bg'>
          <Image src="/Images/background.png" height={610} width={480} className="hero_im" alt="hero" data-aos="fade-down" onMouseOver={()=>{console.log("asdf",isShown); setIsShown(p => !p)}} />
  
{
isShown &&

        
            <>
              <div className="heroPopup">
                <h1 className="popup_heading" >@Alika Maya</h1>
                {/* data-aos="fade-right" data-aos-delay="100" */}
                <p className="popup_job" data-aos="fade-right" data-aos-delay="150"><span className="popup_job_sub">Job : </span>Full Time Job</p>
                <p className="popup_suscriber" data-aos="fade-right" data-aos-delay="200"><span className='popup_suscriber_sub'>Suscriber : </span>122K</p>
                <p className='popup_platform' data-aos="fade-right" data-aos-delay="250" ><span className='popup_platform_sub'>Platform : </span> <div className="website_pages_icon popup_icons">
                  <i className="fa-brands fa-instagram" data-aos="fade-right" data-aos-delay="300"></i>
                  <i className="fa-brands fa-facebook-f" data-aos="fade-right" data-aos-delay="350"></i>
                  <i className="fa-brands fa-twitter" data-aos="fade-right" data-aos-delay="400"></i>
                  <i className="fa-brands fa-linkedin-in" data-aos="fade-right" data-aos-delay="450"></i>
                </div></p>
                <p className='popup_special_thing' data-aos="fade-right" data-aos-delay="500"><span className='popup_special_sub'>Special Things About Influencer : </span>
                  <ul className='popup_special_thing_ul'>
                    <li data-aos="fade-right" data-aos-delay="550">Digital cinematography and film</li>
                    <li data-aos="fade-right" data-aos-delay="600">Fashion and design</li>
                    <li data-aos="fade-right" data-aos-delay="650">Advertising, marketing or digital marketing</li>
                    <li data-aos="fade-right" data-aos-delay="700">Photography</li>
                    <li data-aos="fade-right" data-aos-delay="750">Creative writing</li>
                  </ul>
                </p> 
              </div>
            </>
          }
        </div>

      </div>

    </>
  )
}

export default Hero