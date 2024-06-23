import React from 'react'
import "./Navbar.css";
import Dropdown from './Dropdown';
function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/"><img src="https://adesoafrica.org/wp-content/uploads/2022/09/Asset-1arrow.png" alt="Logo" width="170"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="dropdown d-flex">
            <Dropdown title="About Us" op1="Our Founder" op2="Mision, Vision & Values"op3="30 Years of Impact" op4="Our Team"op5="Our Board"/>
            <Dropdown title="Adeso in Action" op1="Advocacy & Systems Change" op2="Direct Programs"op3="Enterprises & Innovations" op4="Our Team"op5="Our Board"/>
            <Dropdown title="News & Views" op1="In the news" op2="Blogs"op3="Press Release" op4="Publications"op5="Social Media"/>
            <Dropdown title="Get Involved" op1="Advocacy" op2="Direct Programs"op3="Enterprises" op4="Our Team"op5="Our Board"/>
        </div>
        <form>
            <i className="fa-solid fa-magnifying-glass"></i>
        </form>
              <button className="btn" type="submit"><i className="fa-regular fa-heart mx-3"></i>Donate</button>
          </div>
      </nav>
    )
}
export default Navbar