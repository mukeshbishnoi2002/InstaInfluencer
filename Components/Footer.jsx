import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
        <div className='footer'>
          <div className='shade'></div>
            <div className='footer-inner'>
                <div className='footer_first_card'>
                  <h2>Join with me</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                 <div className='footer_first_card_btnLink'>
                 <button>Contact Me</button><span><Link href="#">hello@alikamaya.com</Link></span>
                 </div>
                </div>
          
            <div className='footer_second_card'>
              <form>
                <input type="text" name='first' placeholder='First Name' />
                <input type="text" name='last' placeholder='Last Name' />
                <input type="text" name='email' placeholder='Email Address' />
                <button>Join With Me Now</button>
              </form>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer