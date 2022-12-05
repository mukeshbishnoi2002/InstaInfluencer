import React from 'react'
import Image from 'next/image'
function Audience() {
  return (
    <div className='audience'>
      <div className='audience_card_first'>

        <Image src="/Images/audience-img1.jpg" width={245} height={270} alt="audience1" className='audience_card_first_image_one'></Image>
        <Image src="/Images/audience-img2.jpg" width={245} height={270} alt="audience2" className='audience_card_first_image_two'></Image>

        <Image src="/Images/audience-img3.jpg" width={530} height={270} alt="audience3" className='audience_card_first_image_three'></Image>
      </div>
      <div className='audience_card_second'>
        <p className='influencer_name'>@ALIKAMAYA</p>
        <h1 className='influencer_name_heading'>Instagram + Audience</h1>

        <div>
          <h4 className='instagram_audience_heading'>INSTAGRAM AUDIENCE</h4>
          <div className='instgram_audience_inner_card'>
            <div>
              <p className='percent'> <span className="diff_style">78%</span> &nbsp; female</p>
              <p className='percent'><span className="diff_style">25-35</span> &nbsp; years old</p>
            </div>
            <div className='influence_margin'>
              <p className='second_percent'><span className="second_diff_style">95.5% </span> US</p>
              <p className='second_percent'><span className="second_diff_style">80.2% </span> UK</p>
              <p className='second_percent'><span className="second_diff_style">70.6% </span> CANADA</p>
            </div>
          </div>
        </div>
        <div>

          <div>
            <h4 className='instagram_collaboration_heading'>INSTAGRAM COLLABORATIONS</h4>
            <div className='audience_card_second_inner_card'>
              <div>
                <Image src="/Images/collaborations-img1.jpg" width={220} height={200} alt="collaborations-img1" className='instagram_collaboration_image_one'></Image>
                <h4 className='collaboration_name'>Alika X Tempest</h4>
                <p className='collaboration_dec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <div className='audience_card_second_inner_card_two'>
                <Image src="/Images/collaborations-img2.jpg" width={220} height={200} alt="collaborations-img2" className='instagram_collaboration_image_two'></Image>
                <h4 className='collaboration_name'>LUXE + COTTON</h4>
                <p className='collaboration_dec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Audience