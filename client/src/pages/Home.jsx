import Button from 'react-bootstrap/Button';
import React from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import header from "../images/image.png"

import { HiLocationMarker } from 'react-icons/hi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Footer from '../components/Footer';



export const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="mx-5" style={{ marginTop: "7rem" }}>
              <h1 >An all-inclusive job board to help you find your fit.</h1>
              <p className='mt-1 margin-top-small' >Unleashing the potential of individuals with disabilities special abilities. Together we can help you get going in your job search journey.</p>
             
             <div className='upload-file-container center'>
             <center>
             <p className='font-size-text'> Create your CV or <input className="custom-file-input" type="file"/>  your existing<br></br> resume & allow us to do the magic !</p>
             </center>
             
             </div>
            
            
              </div>
          </div>
          <div className="col-md-6">
            <img src={header} className="img-fluid" />
          </div>
        </div>

        <br></br>

        <div className="row center mt-5" style={{ textAlign: "center" }}>

          <h1>Fill out our choice-based questionnaire to get
            <br></br> personalized job results.</h1>


          <p className='mt-3'>This test will help us collect and give you the best suited job results according to your likes and strengths.</p>

          <br></br>
          <center>
            <Button className='mt-3' variant="dark" style={{ width: "15rem" }}>Take Questionnaire</Button>
          </center>

        </div>



      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className='container mt-5'>
        <div className='row'>
          <div>
            <p>Explore 1246 jobs at </p>
          </div>
          <div>
            <p>From Tech to Music to Artistry, choose from our wide range of jobs to suit your liking.</p>
          </div>
          <div className='d-flex'>
            <Button className='button-filter'>All</Button>
            <Button className='button-filter'>Tech</Button>
            <Button className='button-filter'>Design</Button>
            <Button className='button-filter'>Art</Button>
            <Button className='button-filter'>Operations</Button>
            <Button className='button-filter'>Culinary Arts</Button>
            <Button className='button-filter'>Business
            </Button>
            <Button className='button-filter'>Social Services</Button>
          </div>



          <div className='row'>


            <hr className='mt-5'></hr>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex'>
                <p className='mx-2'>heyy</p>
                <div>
                  <h5>Product Designer</h5>
                  <p>McDonald’s|  Hybrid | Full-time </p>
                </div>
              </div>
              <div className=''>
                <p><HiLocationMarker /> Product Designer</p>
                <p className='mx-5'>Apply <BsBoxArrowUpRight /> </p>

              </div>

            </div>

          </div>

          <div className='row'>


          <hr className='mt-5'></hr>
          <div className='d-flex justify-content-between mt-2'>
            <div className='d-flex'>
              <p className='mx-2'>heyy</p>
              <div>
                <h5>Product Designer</h5>
                <p>McDonald’s|  Hybrid | Full-time </p>
              </div>
            </div>
            <div className=''>
              <p><HiLocationMarker /> Product Designer</p>
              <p className='mx-5'>Apply <BsBoxArrowUpRight /> </p>

            </div>

          </div>

        </div>
        <div className='row'>


        <hr className='mt-5'></hr>
        <div className='d-flex justify-content-between mt-2'>
          <div className='d-flex'>
            <p className='mx-2'>heyy</p>
            <div>
              <h5>Product Designer</h5>
              <p>McDonald’s|  Hybrid | Full-time </p>
            </div>
          </div>
          <div className=''>
            <p><HiLocationMarker /> Product Designer</p>
            <p className='mx-5'>Apply <BsBoxArrowUpRight /> </p>

          </div>

        </div>

      </div>








        </div>

      </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

  <Footer/>
    </div>
  );
};
