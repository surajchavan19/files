import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import "@passageidentity/passage-auth";
import login from "../images/signup.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Login = () => {
   
  const [email ,setUserName]=useState('');
  const [password ,setPassword]=useState('');


  const navigation =useNavigate();

  const submitHandler = async (e) => {
    
    if(email === "" || password===""){
      alert("pill fill data")
    }
    console.log(email,password)

    e.preventDefault();

    await axios
      .post('http://localhost:4000/login', {
        email,
        password
        
      })
      .then((res) => {
        if (res.status === 200) {
          alert(res.data);
          alert(res.data.status);
          navigation("/home")
        } else{
          alert("Crediantial Invalid");
          // window.location.reload();
        }
        return res;
      })
      .catch((err) => console.log(err.message));
  };




  return (
    <>
    
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "-5rem" }}>
          <div className="col-md-6" >

            <div className="login-left">

              <h3>Sign in to accelerate your job search.</h3>
              <h5 style={{ fontWeight: "400" }} className="mt-4">Be a part of the Wavve Family and access free job tips and a curated job palette.</h5>
            </div>
            
            <div  className="mt-3 login-left">
            <div className="input-div  mt-2">
        
            <input className="input-filed"  type='text' name="username" placeholder="Enter Your Email" value={email} onChange={(e)=>{setUserName(e.target.value)}} /> <br></br>
            </div>
            <div className="input-div mt-2">
          
            <input className="input-filed" type='text'  placeholder="Enter Your Password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br></br>
            </div>
            <button className="login-button mt-3" onClick={submitHandler}>login</button>
            <p className="mt-4">Not a member? <Link to="/">Register here</Link></p>
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
     
    </>
  );
};
