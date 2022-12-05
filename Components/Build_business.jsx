import React from 'react'
import Image from 'next/image'
import { Build_business_information } from '../Utility/Cards'
function Build_business() {
  return (
    <div className='build_business'>
      <h1 className='build_business_heading'>Build The Business Of Your Dreams With My Programs</h1>

      {
        Build_business_information.map((items, key) => {
          const { img, title, dec, btn, id } = items;
          return (
            <div className='build_business_card' key={key}>
             <Image src={img} alt="build_business" width={569} height={370} style={{order : id == 1 ? 1 : 0}}  className="build_business_image"></Image>
              <div className='build_business_card_content' >
                <h2>{title}</h2>
                <p>{dec}</p>
                <button>{btn}</button>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default Build_business