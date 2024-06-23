import React from 'react'
import "./Footer.css"
import Carousel from './Carousel'
function Footer() {
    return ( 
    <div className="footer">
         <div className="container d-flex">
            <div className="anchor"><span>Make an impact…</span> discover more ways to get involved.</div>
            <button>Get Involved<i className="fa-solid fa-chevron-right py-1"></i></button>
        </div>
        <div className="container">
            <div className="heading">
                <h3>Latest News & Views</h3>
            </div> 
        </div>
            <Carousel/>
    </div>
    )
}

export default Footer