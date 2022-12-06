import React from 'react'
import Image from 'next/image'
import { Latest_insights_information } from "../Utility/Cards"
function Latest_insights() {

  return (
    <div className='latest_inside'>
      <p className='from_blog' data-aos="fade-down">FROM THE BLOG</p>
      <h1 className='latest_inside_heading' data-aos="fade-down">Latest insights are on top all times</h1>
      <div className='latest_inside_card_container'>
        {
          Latest_insights_information.map((items, key) => {
            const { id, img, post_type, post_style, post_uplaod_time, title} = items;
            return (
              <div className='latest_inside_card' key={key}>
                <Image src={img} width={310} height={385} alt="latest_inside" className='latest_inside_image' data-aos="fade-right"></Image>
                <div className='latest_inside_inner_card' data-aos="fade-left">
                  <p>{post_type}, {post_style} - {post_uplaod_time}</p>
                  <h2>{title}</h2>
                </div>
              </div>
            )
          })
        }
  
      </div>
    </div>

  )
}

export default Latest_insights