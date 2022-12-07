import React from 'react'
import Image from 'next/image'
function Audience() {
  return (
    <div className='audience'>
      <div className='audience_card_first'>

        <Image src="/Images/audience-img1.jpg" width={245} height={270} alt="audience1" className='audience_card_first_image_one' ></Image>
        {/* data-aos="fade-right" */}
        <Image src="/Images/audience-img2.jpg" width={245} height={270} alt="audience2" className='audience_card_first_image_two' ></Image>
        {/* data-aos="fade-right" data-aos-delay="200" */}
        <Image src="/Images/audience-img3.jpg" width={530} height={270} alt="audience3" className='audience_card_first_image_three' ></Image>
        {/* data-aos="fade-right" */}
      </div>
      <div className='audience_card_second'>
        <p className='influencer_name'>@ALIKAMAYA</p>
        {/* data-aos="fade-left" */}
        <h1 className='influencer_name_heading' >Instagram + Audience</h1>
        {/* data-aos="fade-left" */}
        <div>
          <h4 className='instagram_audience_heading'>INSTAGRAM AUDIENCE</h4>
          {/* data-aos="fade-left" */}
          <div className='instgram_audience_inner_card' >
            <div>
            {/* data-aos="fade-left" data-aos-delay="200" */}
              <p className='percent'> <span className="diff_style">78%</span> &nbsp; female</p>
              <p className='percent'><span className="diff_style">25-35</span> &nbsp; years old</p>
            </div>
            <div className='influence_margin'>
            {/* data-aos="fade-left" */}
              <p className='second_percent'><span className="second_diff_style">95.5% </span> US</p>
              <p className='second_percent'><span className="second_diff_style">80.2% </span> UK</p>
              <p className='second_percent'><span className="second_diff_style">70.6% </span> CANADA</p>
            </div>
          </div>
        </div>
        <div>

          <div>
            <h4 className='instagram_collaboration_heading'>INSTAGRAM COLLABORATIONS</h4>
            {/* data-aos="fade-left" */}
            <div className='audience_card_second_inner_card'>
              <div >
                <Image src="/Images/collaborations-img1.jpg" width={220} height={200} alt="collaborations-img1" className='instagram_collaboration_image_one'></Image>
                {/* data-aos="fade-left */}
                <h4 className='collaboration_name'>Alika X Tempest</h4>
                {/* data-aos="fade-left"  data-aos-delay="100" */}
                <p className='collaboration_dec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                {/* data-aos="fade-left"  data-aos-delay="200" */}
              </div>
              <div className='audience_card_second_inner_card_two'>
                <Image src="/Images/collaborations-img2.jpg" width={220} height={200} alt="collaborations-img2" className='instagram_collaboration_image_two'></Image>
                {/* data-aos="fade-left" */}
                <h4 className='collaboration_name' >LUXE + COTTON</h4>
                {/* data-aos="fade-left" data-aos-delay="100" */}
                <p className='collaboration_dec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                {/* data-aos="fade-left" data-aos-delay="200" */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Audience