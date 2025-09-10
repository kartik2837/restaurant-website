// import React from 'react'
// import './Footer.css'
// import { assets } from '../../assets/assets'
// const Footer = () => {
//     return (
//         <div className='footer' id='footer'>
//             <div className="footer-content">
//                 <div className="content-left">
//                     <img src={assets.logo} alt="" />
//                     <p>A food website is a digital platform to share recipes, cooking tips, or information about food products and services.</p>
//                     <br />
//                     <div className="footer-social-icon">
//                         <img src={assets.facebook_icon} alt="" />
//                         <img src={assets.twitter_icon} alt="" />
//                         <img src={assets.linkedin_icon} alt="" />

//                     </div>
//                 </div>
//                 <div className="footer-content-center">
//                     <h2>Company</h2>
//                     <ul>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Delivery</li>
//                         <li>Privacy-Policy</li>
//                     </ul>

//                 </div>
//                 <div className="footer-content-right">
//                     <h2>GET IN TOUCH</h2>
//                     <ul>
//                         <li> Phone No:+91 6265691817</li>
//                         <li>Email-Id: Shivani@gmail.com</li>
//                         <li>Alternative Phone No. +91 6265691817</li>
//                     </ul>

//                 </div>
//             </div>
//             <hr />
//             <div className="footer-copyright">
//                 <p>Copyright 2025 @ Shivani@gmail.com - All Right Reserved</p>
//             </div>

//         </div>
//     )
// }

// export default Footer


// logo change

// import { Link } from 'react-router-dom';
// import { assets } from '../../assets/assets'
// export default function Footer() {
//     return (
//         <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
//             <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
//                 <div className="md:max-w-96">
//                     <img className="h-9" src={assets.logo} alt="" />
//                     <br />
//                     <p className="mt-6 text-sm">
//                         Your one-stop online grocery store, delivering fresh fruits, vegetables, dairy, and household essentials right to your home with the best quality and unbeatable prices.
//                     </p>
//                 </div>
//                 <div className="flex-1 flex items-start md:justify-end gap-20">
//                     <div>
//                         <h2 className="font-semibold mb-5 text-gray-800">Quick Links</h2>
//                         <ul className="text-sm space-y-2">
//                             <li><Link to={'/'}>Home</Link></li>
//                             <li><Link to={'/about'}>About us</Link></li>
//                             <li><Link to={'/contact'}>Contact us</Link></li>
//                             <li><Link to={'/policy'}>policy</Link></li>
//                         </ul>

//                     </div>
//                     <div>
//                         <h2 className="font-semibold mb-5 text-gray-800">Usefull Links</h2>
//                         <ul className="text-sm space-y-2">
//                             <li><Link to={'/conditions'}>Condition</Link></li>
//                             <li><Link to={'/return'}>Return</Link></li>
//                             <li><Link to={'/service'}>Service</Link></li>

//                         </ul>

//                     </div>
//                     <div>
//                         <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
//                         <div className="text-sm space-y-2">
//                             <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
//                             <div className="flex items-center gap-2 pt-4">
//                                 <input className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email" />
//                                 <button className="bg-blue-600 w-24 h-9 text-white rounded">Subscribe</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <p className="pt-4 text-center text-xs md:text-sm pb-5">
//                 Copyright 2025 © <a href="https://prebuiltui.com">PrebuiltUI</a>. All Right Reserved.
//             </p>
//         </footer>
//     );
// };






import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'

export default function Footer() {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                {/* Left Side - Logo + About */}
                <div className="md:max-w-96">
                    {/* 👇 यहाँ size बढ़ा दिया */}
                    <img 
                        className="w-32 h-auto mb-4" 
                        src={assets.logo} 
                        alt="Food App Logo" 
                    />
                    <p className="mt-4 text-sm">
                        Your one-stop online grocery store, delivering fresh fruits, 
                        vegetables, dairy, and household essentials right to your home 
                        with the best quality and unbeatable prices.
                    </p>
                </div>

                {/* Right Side - Links + Newsletter */}
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Quick Links</h2>
                        <ul className="text-sm space-y-2">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About us</Link></li>
                            <li><Link to={'/contact'}>Contact us</Link></li>
                            <li><Link to={'/policy'}>Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Usefull Links</h2>
                        <ul className="text-sm space-y-2">
                            <li><Link to={'/conditions'}>Condition</Link></li>
                            <li><Link to={'/return'}>Return</Link></li>
                            <li><Link to={'/service'}>Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
                        <div className="text-sm space-y-2">
                            <p>Tasty updates, new dishes, and offers, straight to your inbox weekly.</p>
                            <div className="flex items-center gap-2 pt-4">
                                <input 
                                    className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2" 
                                    type="email" 
                                    placeholder="Enter your email" 
                                />
                                <button className="bg-blue-600 w-24 h-9 text-white rounded">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 © <a href="#" className="text-blue-600">Design by Shivani</a>. 
                All Right Reserved.
            </p>
        </footer>
    );
};
