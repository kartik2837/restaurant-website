// import React from 'react'
// import './Header.css'
// const Header = () => {
//     return (
//         <div className='header'>
//             <div className="header-content">
                // {/* <h2>Order Your favourite food here</h2> */}
//                 <p>Choose from a deverse menu featuring a delectable array of dishes crafted with the satisfyied your craving and elevate your dinning experience, one delicious meal at a time.</p>
//                 <button>View Menu</button>
//             </div>

//         </div>
//     )
// }

// export default Header



import React from "react";
import banner1 from "../../assets/Piza.png";
import banner2 from"../../assets/Food Menu Banner.png";
import banner3 from"../../assets/food rest.png";

const Header = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100 hight-80" alt="First Slide" />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>First slide label</h5> */}
            {/* <p>Some representative placeholder content for the first slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100 hight-80" alt="Second Slide" />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Second slide label</h5> */}
            {/* <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100 hight-70" alt="Third Slide" />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Third slide label</h5> */}
            {/* <p>Some representative placeholder content for the third slide.</p> */}
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Header;
