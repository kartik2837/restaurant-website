// import React from 'react'
// import './AppDownload.css'
// import { assets } from '../../assets/assets'
// const AppDownload = () => {
//     return (
//         <div className='app-download' id='app-download'>
//             <p>For Better Experience Download <br />Tamato App</p>
//             <div className="app-download-plateforms">
//                 <img src={assets.play_store} alt="" />
//                 <img src={assets.app_store} alt="" />
//             </div>
//         </div>
//     )
// }

// export default AppDownload


// import React from "react";
// import vedio1 from "../../assets/vedio1.mp4";


// const banners = [
//   { src: {vedio1}, type: "vedio1", alt: "Vedio banner 1" },
//   ];

//   <div className="slide-media">
//   {s.type === "vedio1" ? (
//     <video
//       src={s.src}
//       autoPlay
//       muted
//       loop
//       playsInline
//       style={{ width: "100%", height: "100%", objectFit: "cover" }}
//     />
//   ) : (
//     <img src={s.src} alt={s.alt || `Slide ${i + 1}`} />
//   )}
// </div>

// import React from 'react';
// import vedio1 from '../../assets/vedio1.mp4';

// const AppDownload = () => {
//   return (
//     <div className="banner-container" style={{position:'relative', width:'100%', height:'600px', overflow:'hidden'}}>
//       <video 
//         autoPlay 
//         loop 
//         muted 
//         className="banner-video"
//         style={{width:'100%', height:'100%', objectFit:'cover'}}
//       >
//         <source src={vedio1} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="banner-content" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', color:'white', textAlign:'center'}}>
//         {/* <h1>Welcome to My Website</h1>
//         <p>Your tagline goes here</p> */}
//       </div>
//     </div>
//   );
// }

// export default AppDownload;




// import React from 'react';
// import vedio1 from '../../assets/vedio1.mp4';

// const AppDownload = () => {
//   return (
//     <div 
//       className="banner-container" 
//       style={{
//         position: 'relative', 
//         width: '100%', 
//         height: '600px', 
//         overflow: 'hidden', 
//         background: 'black' // खाली जगह black दिखेगी
//       }}
//     >
//       <video 
//         autoPlay 
//         loop 
//         muted 
//         className="banner-video"
//         style={{
//           width: '100%', 
//           height: '100%', 
//           objectFit: 'contain',  // पूरा video दिखेगा
//           objectPosition: 'center' // center में adjust होगा
//         }}
//       >
//         <source src={vedio1} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div 
//         className="banner-content" 
//         style={{
//           position: 'absolute', 
//           top: '50%', 
//           left: '50%', 
//           transform: 'translate(-50%, -50%)', 
//           color: 'white', 
//           textAlign: 'center'
//         }}
//       >
//         {/* <h1>Welcome to My Website</h1>
//         <p>Your tagline goes here</p> */}
//       </div>
//     </div>
//   );
// }

// export default AppDownload;



import React from 'react';
import vedio1 from '../../assets/vedio1.mp4';

const AppDownload = () => {
  return (
    <div 
      className="banner-container" 
      style={{
        position: 'relative', 
        width: '100vw',       // पूरा viewport width
        height: '100vh',      // पूरा viewport height
        overflow: 'hidden',
        background: 'black'
      }}
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="banner-video"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',   // container पूरा भर जाएगा
          objectPosition: 'center'
        }}
      >
        <source src={vedio1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div 
        className="banner-content" 
        style={{
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          color: 'white', 
          textAlign: 'center'
        }}
      >
        {/* <h1>Welcome to My Website</h1>
        <p>Your tagline goes here</p> */}
      </div>
    </div>
  );
}

export default AppDownload;
