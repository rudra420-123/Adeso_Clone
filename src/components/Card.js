import React from 'react'
import "./Card.css"

function Card() {
    return ( 
        <>
            <div className="card">
                <div className="img"></div>
                <div className="post-ad">
                    <div className="image"></div>
                    <button className="btn-read d-flex">LEARN MORE <i className="fa-solid fa-chevron-right py-2"></i></button>
                </div>
            </div>
        </>
    )
}

export default Card