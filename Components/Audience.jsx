import React from 'react'
import Image from 'next/image'
function Audience() {
  return (
    <div className='audience'>
      <div className='audience_card_first'>

        <Image src="/Images/audience-img1.jpg" width={245} height={270} alt="audience1" className='audience_card_first_image_one' data-aos="fade-right"></Image>
        <Image src="/Images/audience-img2.jpg" width={245} height={270} alt="audience2" className='audience_card_first_image_two' data-aos="fade-right" data-aos-delay="200"></Image>

        <Image src="/Images/audience-img3.jpg" width={530} height={270} alt="audience3" className='audience_card_first_image_three' data-aos="fade-right"></Image>
      </div>
      <div className='audience_card_second'>
        <p className='influencer_name' data-aos="fade-left">@ALIKAMAYA</p>
        <h1 className='influencer_name_heading' data-aos="fade-left">Instagram + Audience</h1>

        <div>
          <h4 className='instagram_audience_heading' data-aos="fade-left">INSTAGRAM AUDIENCE</h4>
          <div className='instgram_audience_inner_card' >
            <div data-aos="fade-left" data-aos-delay="200">
              <p className='percent'> <span className="diff_style">78%</span> &nbsp; female</p>
              <p className='percent'><span className="diff_style">25-35</span> &nbsp; years old</p>
            </div>
            <div className='influence_margin' data-aos="fade-left">
              <p className='second_percent'><span className="second_diff_style">95.5% </span> US</p>
              <p className='second_percent'><span className="second_diff_style">80.2% </span> UK</p>
              <p className='second_percent'><span className="second_diff_style">70.6% </span> CANADA</p>
            </div>
          </div>
        </div>
        <div>

          <div>
            <h4 className='instagram_collaboration_heading' data-aos="fade-left">INSTAGRAM COLLABORATIONS</h4>
            <div className='audience_card_second_inner_card'>
              <div >
                <Image src="/Images/collaborations-img1.jpg" width={220} height={200} alt="collaborations-img1" className='instagram_collaboration_image_one' data-aos="fade-left"></Image>
                <h4 className='collaboration_name' data-aos="fade-left"  data-aos-delay="100">Alika X Tempest</h4>
                <p className='collaboration_dec' data-aos="fade-left"  data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <div className='audience_card_second_inner_card_two'>
                <Image src="/Images/collaborations-img2.jpg" width={220} height={200} alt="collaborations-img2" className='instagram_collaboration_image_two' data-aos="fade-left"></Image>
                <h4 className='collaboration_name' data-aos="fade-left" data-aos-delay="100">LUXE + COTTON</h4>
                <p className='collaboration_dec' data-aos="fade-left" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Audience