import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black text-white'>
    <h1 className='text-center'>Questions ? Contact us</h1>
    <div className='flex justify-center pt-16 pb-24'>
      <div className="footerCols mr-24">
        <div className='mb-3'>FAQ</div>
        <div className='mb-3'>Media Center</div>
        <div className='mb-3'>Buy Gift Cards</div>
        <div className='mb-3'>Cookie Preferences</div>
        <div className='mb-3'>Legal Notices</div>
      </div>

      <div className="footerCols mr-24">
        <div className='mb-3'>Gift Card Terms</div>
        <div className='mb-3'>Investor Relations</div>
        <div className='mb-3'>Ways to watch</div>
        <div className='mb-3'>Corporate Information</div>
        <div className='mb-3'> Only on Netflix</div>
      </div>

      <div className="footerCols mr-24">
        <div className='mb-3'>Help Center</div>
        <div className='mb-3'>Jobs</div>
        <div className='mb-3'>Terms of Use</div>
        <div className='mb-3'>Contact Us</div>
      </div>

      <div className="footerCols">
        <div className='mb-3'>Account</div>
        <div className='mb-3'>Redeem Gift Cards</div>
        <div className='mb-3'>Privacy</div>
        <div className='mb-3'>Speed Test</div>
      </div>
    </div>
    </div>
  )
}
