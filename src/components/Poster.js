import React from 'react'
import "./Poster.css"

function Poster() {
    return ( 
        <>
        <div className="poster">
        <div className="container d-flex">
            <div className="side-content">
                <h1>Changing the way people think about and deliver aid.</h1>
                <button className="btn-learn">Learn More <i className="fa-solid fa-chevron-right"></i></button>
                <br />
            </div>
            <div className="side-content">
                <div className="post-ad">
                    <div className="image"></div>
                    <button className="btn-read d-flex">READ MORE <i className="fa-solid fa-chevron-right py-2"></i></button>
                </div>
            </div>  
           </div>
        </div>
        <div className="container py-4">
        <div className="content">
                <h3><span>Adeso</span> is a vibrant African organization with a vision of a world <span>independent</span> from aid and which relies on the <span>resourcefulness</span> of its people.</h3>
            </div>
        </div>
        </>
    )
}

export default Poster