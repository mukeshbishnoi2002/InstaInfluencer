import Image from 'next/image'
function Hero() {

  return (
    <>
      <div className='hero'>
        <div className='hero_content' >
          <h1 data-aos="fade-right" data-aos-delay="100">Hi, I'M Alika Maya</h1>
          <p data-aos="fade-right" data-aos-delay="200">A Photographer & Business Strategist who empowers entrepreneurs to build a brand, market it on social media, and create a life they love.</p>
          <div data-aos="fade-right" data-aos-delay="300">
            <input type="text" placeholder='Enter Your Email Address'/> <button>Join with me now</button>
          </div>
        </div>
        <div className='hero_bg'>
        <Image src="/Images/background.png" height={610} width={480} className="hero_im" alt="hero" data-aos="fade-down"></Image>
        </div>
      </div>
      
    </>
  )
}

export default Hero