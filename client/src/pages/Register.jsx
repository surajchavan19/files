import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import "@passageidentity/passage-auth";
import login from "../images/signup.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const Register = () => {
     
  const [username ,setUserName]=useState('');
  const [password ,setPassword]=useState('');


  const submitHandler = async (e) => {
    
    if(username === "" || password===""){
      alert("pill fill data")
    }
    console.log(username,password)

    e.preventDefault();

    await axios
      .post('/api/v3/inventory/batch/createBatch', {
        username,
        password
        
      })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.message);
        } else if (!res.data.error) {
          alert(res.data.message);
          window.location.reload();
        }
        return res;
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
    <Navbar />
    <div className="container-fluid">
      <div className="row" style={{ marginTop: "-5rem" }}>
        <div className="col-md-6" >

          <div className="login-left ">

            <h3>Sign in to accelerate your job search.</h3>
            <h5 style={{ fontWeight: "400" }} className="mt-4">Be a part of the Wavve Family and access free job tips and a curated job palette.</h5>
          </div>
          
          <div  className="mt-3 login-left">
          <div className="input-div  mt-2">
      
          <input className="input-filed"  type='text' name="username" placeholder="Enter Your Email" value={username} onChange={(e)=>{setUserName(e.target.value)}} /> <br></br>
          </div>
          <div className="input-div mt-2">
        
          <input className="input-filed" type='text'  placeholder="Enter Your Password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br></br>
          </div>
          <button className="login-button mt-3" onClick={submitHandler}>Sign up</button>
          
          <p className="mt-4">Already a member? <Link to="/login">login here</Link></p>
         
          </div>
          

          {/* <passage-auth app-id={"0ZpFbJsBa1IWamTgtAyFEYNP"}></passage-auth> */}
        </div>
        <div className="col-md-6">
          <img src={login} className="img-fluid" />
        </div>
      </div>


    </div>
    <br></br>
    <br></br>
    <br></br>
    <Footer /></>
  );
};
