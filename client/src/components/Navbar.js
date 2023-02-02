import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';


import { AiOutlineClose } from 'react-icons/ai';
import { RiArrowDropRightFill } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';

import "./navbar.css";
import Button from 'react-bootstrap/Button';
import logo from "../images/logo.jpg"

const Navbar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <section className="header ">
        <Link to="/" className="margin-left-500 d-flex" style={{ marginLeft: "1rem" }}>
          <img src={logo} alt="errorlogo" ></img>
          
        </Link>
        

        <nav className={showMediaIcons ? "navbar active" : "navbar"}>
          <ul className="menu">
            <li>
              <div className="dropdown">
                <Link to="/" className="dropbtn d-flex drop-link">
                  Business-Guide <MdArrowDropDown className="mt-1" />
                </Link>
                <div className="dropdown-content">
                  <li>
                    <Link to="/where">Where</Link>{" "}
                  </li>
                  <li>
                    <Link to="/how">How</Link>{" "}
                  </li>
                  <li>
                    <Link to="/why">Why</Link>{" "}
                  </li>
                </div>
              </div>
            </li>

            <li>
              <div className="dropdown">
                <Link to="/" className="dropbtn d-flex drop-link">
                  Licensing <MdArrowDropDown className="mt-1" />
                </Link>
                <div className="dropdown-content">
                  <li className="dropdown2">
                    <Link to="/mainland" className="d-flex">
                      MainlandLincense
                      <RiArrowDropRightFill fontSize="20px" className="mt-1 " />{" "}
                    </Link>
                    <ul className="dropdown-content2">
                     
                      <li>
                        <Link to="/tourism">Tourism License</Link>{" "}
                      </li>
                      <li>
                        <Link to="/etrade">E Trader Lincense</Link>{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/freezone">Free zone License</Link>{" "}
                  </li>
                  <li>
                    <Link to="/offshore">Offshore License</Link>{" "}
                  </li>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <Link to="/" className="dropbtn d-flex drop-link">
                  Visa <MdArrowDropDown className="mt-1" />
                </Link>
                <div className="dropdown-content">
                  <li>
                    <Link to="/businessvisa">Dubai-Business visa</Link>{" "}
                  </li>
                  <li>
                    <Link to="/investorvisa">Dubai-Investi visa</Link>{" "}
                  </li>
                </div>
              </div>
            </li>
           
            <li>
              <Link to="/blog" className="drop-link">
                Blog{" "}
              </Link>{" "}
            </li>
            <li>
            <Button className="button-style-2">Post a Job</Button>
          </li>
            <li>
            <Button className="button-style">Login</Button>
          </li>
        
          </ul>

          <AiOutlineClose
            className="display  mx-3"
            onClick={() => setShowMediaIcons(false)}
          />
        </nav>

        <div className="hamburger-menu ">
          <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu className="icons " />
          </button>
        </div>
      </section>
  )
}

export default Navbar