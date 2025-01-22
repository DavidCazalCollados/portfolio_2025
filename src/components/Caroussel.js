import React from 'react';
import '../assets/caroussel.css';
import slideImage1 from "../assets/photos/connexion.jpg";
import slideImage2 from "../assets/photos/earth.jpg";
import slideImage3 from "../assets/photos/streamings.jpg";

const Caroussel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className='caroussel-test'>
            <h3 className='text-caroussel'>Create Your Account</h3>
          </div>
          <img src={slideImage1} className="d-block w-100 caroussel-img img-one" alt="..."/>
        </div>
        <div className="carousel-item">
          <div className='caroussel-test'>
            <h3 className='text-caroussel'>Choose Your Country</h3>
          </div>
          <img src={slideImage2} className="d-block w-100 caroussel-img img-two" alt="..."/>
        </div>
        <div className="carousel-item">
          <div className='caroussel-test'>
            <h3 className='text-caroussel'>Select Your Subscriptions</h3>
          </div>
          <img src={slideImage3} className="d-block w-100 caroussel-img img-three" alt="..."/>
        </div>
      </div>
      <button style={{zIndex: "1000"}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button style={{zIndex: "1000"}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Caroussel;
