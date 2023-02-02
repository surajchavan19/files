import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import images from '../images/blog1.jpg'
import Button from 'react-bootstrap/Button';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'><img className='img-fluid rounded' src={images}></img></div>
          <div className='col-md-6'>
            <div className='mt-5'>
              <h2>New Kodable update adds Colorblind Mode</h2>
              <h4 className='text-style-blog mt-3'>Starting with version 8.2, Kodable will now feature a Colorblind Mode that can be enabled or disabled at any time by their 15 million users.</h4>
            </div>

          </div>


        </div>
        <br></br>
        <br></br>

        <div className='row'>
          <div className='d-flex justify-content-between'>
          <div>
          <Button className='button-filter'>All</Button>
          <Button className='button-filter'>Resume</Button>
          <Button className='button-filter'>Interview</Button>
          <Button className='button-filter'>Layoffs</Button>
          <Button className='button-filter'>Disability</Button>
          <Button className='button-filter'>Motivation</Button>
          <Button className='button-filter'>Job Search
          </Button>
          </div>
          
            <form class="search-box d-flex">
            <button style={{border:"none" , background:"white"}}><span style={{fontSize: "25px"  ,marginTop:"5px"}} className="material-symbols-outlined">search</span></button>
            <input style={{width: "255px"}} type="search" name="focus" placeholder="Search" id="search-input" value=""/>
          </form>
          </div>

        </div>
        <br></br>
        <br></br>
        <div className='row'>
        <div className='col-md-4 mt-4'>
        <img className='img-fluid rounded' src={images}></img>
        <h5 className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
        </div>
        <div className='col-md-4 mt-4'>
        <img className='img-fluid rounded' src={images}></img>
        <h5 className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
        </div>
        <div className='col-md-4 mt-4'>
        <img className='img-fluid rounded' src={images}></img>
        <h5 className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
        </div>

        <div className='col-md-4 mt-4'>
        <img className='img-fluid rounded' src={images}></img>
        <h5 className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
        </div>
        <div className='col-md-4 mt-4'>
        <img className='img-fluid rounded' src={images}></img>
        <h5 className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
        </div>
        <div className='col-md-4 mt-4'>
        <img className='img-fluid rounded' src={images}></img>
        <h5 className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
        </div>
        </div>






      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>



      <Footer />
    </div>
  )
}

export default Blog