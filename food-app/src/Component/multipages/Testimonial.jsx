// import React from "react";

// const Testimonial = () => {
//   const reviews = [
//     {
//       name: "Reshabh",
//       role: "customer",
//       img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
//       text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
//     },
//     {
//       name: "Shourabh",
//       role: "customer",
//       img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
//       text: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
//     },
//     {
//       name: "Riya",
//       role: "customer",
//       img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
//       text: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
//     },
//   ];

//   return (
//     <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center">
//           {/* Heading */}
//           <div className="text-center">
//             <p className="text-lg font-medium text-gray-600">
//                people have said how good grocery iteam is good feedback.
//             </p>
//             <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
//               Our happy clients.
//             </h2>
//           </div>

//           {/* Button */}
//           <div className="mt-8 text-center md:mt-16 md:order-3">
//             <a
//               href="#"
//               className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
//             >
//               Check all 2,157 reviews
//             </a>
//           </div>

//           {/* Cards */}
//           <div className="relative mt-10 md:mt-24 md:order-2">
//             {/* Gradient background */}
//             <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
//               <div
//                 className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
//                 }}
//               ></div>
//             </div>

//             <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
//               {reviews.map((review, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col overflow-hidden shadow-xl"
//                 >
//                   <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
//                     <div className="flex-1">
//                       {/* Stars */}
//                       <div className="flex items-center text-yellow-400">
//                         {Array(5)
//                           .fill(0)
//                           .map((_, i) => (
//                             <svg
//                               key={i}
//                               className="w-5 h-5"
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 20 20"
//                               fill="currentColor"
//                             >
//                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                             </svg>
//                           ))}
//                       </div>

//                       {/* Review Text */}
//                       <blockquote className="flex-1 mt-8">
//                         <p className="text-lg leading-relaxed text-gray-900">
//                           “{review.text}”
//                         </p>
//                       </blockquote>
//                     </div>

//                     {/* Reviewer */}
//                     <div className="flex items-center mt-8">
//                       <img
//                         className="flex-shrink-0 object-cover rounded-full w-11 h-11"
//                         src={review.img}
//                         alt={review.name}
//                       />
//                       <div className="ml-4 text-left">
//                         <p className="text-base font-bold text-gray-900">
//                           {review.name}
//                         </p>
//                         <p className="mt-0.5 text-sm text-gray-600">
//                           {review.role}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;





// import React from "react";
// import Slider from "react-slick"; 
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonial = () => {
//   const reviews = [
//     {
//       name: "Reshabh",
//       role: "customer",
//       img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
//       text: "You made it so simple. My new site is so much faster and easier to work with.",
//     },
//     {
//       name: "Shourabh",
//       role: "customer",
//       img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
//       text: "Simply the best. Better than all the rest. I’d recommend this product to everyone.",
//     },
//     {
//       name: "Riya",
//       role: "customer",
//       img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
//       text: "I cannot believe that I have got a brand new landing page. Super easy to edit and publish.",
//     },
//   ];

//   // Carousel Settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,       // Auto slide
//     autoplaySpeed: 3000,  // 3 seconds
//     slidesToShow: 3,      // Show 3 reviews at a time
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024, // tablets
//         settings: { slidesToShow: 2 }
//       },
//       {
//         breakpoint: 640,  // mobile
//         settings: { slidesToShow: 1 }
//       }
//     ]
//   };

//   return (
//     <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center">
//           {/* Heading */}
//           <div className="text-center">
//             <p className="text-lg font-medium text-gray-600">
//               People have said how good grocery items are.
//             </p>
//             <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
//               Our Happy Clients
//             </h2>
//           </div>

//           {/* Auto Slider */}
//           <div className="mt-10 w-full">
//             <Slider {...settings}>
//               {reviews.map((review, index) => (
//                 <div key={index} className="p-4">
//                   <div className="flex flex-col overflow-hidden shadow-xl rounded-2xl bg-white p-6">
//                     {/* Stars */}
//                     <div className="flex items-center text-yellow-400">
//                       {Array(5).fill(0).map((_, i) => (
//                         <svg key={i} className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902..."></path>
//                         </svg>
//                       ))}
//                     </div>

//                     {/* Text */}
//                     <blockquote className="mt-6">
//                       <p className="text-lg text-gray-700">“{review.text}”</p>
//                     </blockquote>

//                     {/* Reviewer */}
//                     <div className="flex items-center mt-6">
//                       <img
//                         className="w-12 h-12 rounded-full object-cover"
//                         src={review.img}
//                         alt={review.name}
//                       />
//                       <div className="ml-4">
//                         <p className="font-bold text-gray-900">{review.name}</p>
//                         <p className="text-sm text-gray-600">{review.role}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;



























// adity photo problem
// import React from "react";
// import Slider from "react-slick"; 
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonial = () => {
//   const reviews = [
//     {
//       name: "Reshabh",
//       role: "Customer",
//       img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
//       text: "You made it so simple. My new site is so much faster and easier to work with.",
//     },
//     {
//       name: "Shourabh",
//       role: "Customer",
//       img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
//       text: "Simply the best. Better than all the rest. I’d recommend this product to everyone.",
//     },
//     {
//       name: "Riya",
//       role: "Customer",
//       img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
//       text: "I cannot believe that I have got a brand new landing page. Super easy to edit and publish.",
//     },
//     {
//       name: "Aditya",
//       role: "Customer",
//       img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-3.png",
//       text: "Best shopping experience I have ever had, totally worth it!",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "40px", // gap left-right
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "30px" } },
//       { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "20px" } }
//     ]
//   };

//   return (
//     <>
//       <style>{`
//         .testimonial-section {
//           padding: 60px 20px;
//           background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
//         }
//         .text-center { text-align: center; }
//         .subtitle { font-size: 16px; color: #666; }
//         .title { font-size: 32px; font-weight: bold; color: #333; margin-top: 8px; }
//         .testimonial-card {
//           background: #fff;
//           border-radius: 16px;
//           padding: 25px;
//           margin: 0 12px;  /* gap between slides */
//           box-shadow: 0 6px 18px rgba(0,0,0,0.08);
//           text-align: left;
//           transition: transform 0.4s ease;
//         }
//         .testimonial-card:hover {
//           transform: translateY(-8px);
//         }
//         .stars { color: #facc15; font-size: 18px; }
//         .review-text {
//           margin: 15px 0;
//           font-size: 16px;
//           color: #555;
//           font-style: italic;
//         }
//         .reviewer { display: flex; align-items: center; margin-top: 15px; }
//         .avatar {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           margin-right: 12px;
//         }
//         .name { font-weight: bold; color: #111; }
//         .role { font-size: 14px; color: #777; }
//       `}</style>

//       <section className="testimonial-section">
//         <div className="container">
//           {/* Heading */}
//           <div className="text-center mb-10">
//             <p className="subtitle">What our customers say</p>
//             <h2 className="title">Our Happy Clients</h2>
//           </div>

//           {/* Slider */}
//           <Slider {...settings}>
//             {reviews.map((review, index) => (
//               <div key={index}>
//                 <div className="testimonial-card">
//                   {/* Stars */}
//                   <div className="stars">
//                     {Array(5).fill(0).map((_, i) => (
//                       <span key={i}>⭐</span>
//                     ))}
//                   </div>

//                   {/* Text */}
//                   <blockquote className="review-text">
//                     “{review.text}”
//                   </blockquote>

//                   {/* Reviewer */}
//                   <div className="reviewer">
//                     <img src={review.img} alt={review.name} className="avatar" />
//                     <div>
//                       <p className="name">{review.name}</p>
//                       <p className="role">{review.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Testimonial;



import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const reviews = [
    {
      name: "Reshabh",
      role: "Customer",
      img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
      text: "You made it so simple. My new site is so much faster and easier to work with.",
    },
    {
      name: "Saurabh",
      role: "Customer",
      img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
      text: "Simply the best. Better than all the rest. I’d recommend this product to everyone.",
    },
    {
      name: "Riya",
      role: "Customer",
      img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
      text: "I cannot believe that I have got a brand new landing page. Super easy to edit and publish.",
    },
    {
      name: "Aditya",
      role: "Customer",
      // ✅ working photo for Aditya
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      text: "Best shopping experience I have ever had, totally worth it!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "30px" } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "20px" } }
    ]
  };

  return (
    <>
      <style>{`
        .testimonial-section {
          padding: 60px 20px;
          background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
        }
        .text-center { text-align: center; }
        .subtitle { font-size: 16px; color: #666; }
        .title { font-size: 32px; font-weight: bold; color: #333; margin-top: 8px; }
        .testimonial-card {
          background: #fff;
          border-radius: 16px;
          padding: 25px;
          margin: 0 12px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          text-align: left;
          transition: transform 0.4s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-8px);
        }
        .stars { color: #facc15; font-size: 18px; }
        .review-text {
          margin: 15px 0;
          font-size: 16px;
          color: #555;
          font-style: italic;
        }
        .reviewer { display: flex; align-items: center; margin-top: 15px; }
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 12px;
          object-fit: cover;
        }
        .name { font-weight: bold; color: #111; }
        .role { font-size: 14px; color: #777; }
      `}</style>

      <section className="testimonial-section">
        <div className="container">
          <div className="text-center mb-10">
            <p className="subtitle">What our customers say</p>
            <h2 className="title">Our Happy Clients</h2>
          </div>

          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index}>
                <div className="testimonial-card">
                  <div className="stars">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <blockquote className="review-text">
                    “{review.text}”
                  </blockquote>
                  <div className="reviewer">
                    <img src={review.img} alt={review.name} className="avatar" />
                    <div>
                      <p className="name">{review.name}</p>
                      <p className="role">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
