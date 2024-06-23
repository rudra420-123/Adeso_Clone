import React from 'react'

function Carousel() {
  return (
    <>
    <div className="slider d-flex">
        <button className="carousel-control-prev w-200" type="button" data-bs-target="/carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon span" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
        <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://adesoafrica.org/wp-content/uploads/2022/12/Adeso-Water-Enterprise.-1-jpg-e1671598966952.webp" className=" w-100" alt="1" height="370"/>
                </div>
                <div className="carousel-item active">
                <img src="https://adesoafrica.org/wp-content/uploads/2023/11/UNGA-WINGS-jpg.webp" className=" w-100" alt="1" height="370"/> 
                </div>
                <div className="carousel-item active">
                <img src="https://adesoafrica.org/wp-content/uploads/2022/12/Adeso-Water-Enterprise.-1-jpg-e1671598966952.webp" className=" w-100" alt="1" height="370"/>
                </div>
                <div className="carousel-item active">
                <img src="https://adesoafrica.org/wp-content/uploads/2023/11/UNGA-WINGS-jpg.webp" className=" w-100" alt="1" height="370"/> 
                </div>
                <div className="carousel-item active">
                <img src="https://adesoafrica.org/wp-content/uploads/2022/12/Adeso-Water-Enterprise.-1-jpg-e1671598966952.webp" className=" w-100" alt="1" height="370"/>
                </div>
                <div className="carousel-item active">
                <img src="https://adesoafrica.org/wp-content/uploads/2023/11/UNGA-WINGS-jpg.webp" className=" w-100" alt="1" height="370"/> 
                </div>
            </div>
            </div> 
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="/carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon span" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
    
  )
}

export default Carousel
