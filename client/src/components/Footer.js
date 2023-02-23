import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoGoogle } from 'react-icons/io'
import { TbBrandMeta } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <> 
    <hr></hr>
    <div className='container'>
    <div className='row'>
   
     <div className='col-md-3'>
     <div>
     <p className='text-dark text-bold'>JobWavve.</p>
     <div className='d-flex'>
     <BsInstagram className='mx-1' />
     <IoLogoGoogle  className='mx-1' />
     <TbBrandMeta className='mx-1' />
     </div>
     </div>
     
     </div>
     <div className='col-md-3'>
     
     <li className='footer-li'> <Link to="/" className='link-text'> About Us</Link></li>
     <li className='footer-li'> <Link to="/" className='link-text'>  Blog</Link></li>
     <li className='footer-li'> <Link to="/" className='link-text'>  Contact Us</Link></li>

     
     </div>
     <div className='col-md-3'>
         
   
     <li className='footer-li'> <Link to="/" className='link-text'> Privacy Policy</Link></li>
     <li className='footer-li'> <Link to="/" className='link-text'>  GDPR Compliance</Link></li>
     <li className='footer-li'> <Link to="/" className='link-text'>  License Agreement</Link></li>
     </div>
     <div className='col-md-3'>
       
     <li className='footer-li'> <Link to="/" className='link-text'> Releases</Link></li>
     <li className='footer-li'> <Link to="/" className='link-text'>  Announcements</Link></li>
     <li className='footer-li'> <Link to="/" className='link-text'>  Updates</Link></li>
     </div>

     </div>
    
    
    </div>


      <br></br>
      
      <br></br>
      
      <br></br>
      </>
  )
}

export default Footer