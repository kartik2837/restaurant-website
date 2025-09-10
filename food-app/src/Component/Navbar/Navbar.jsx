// import React, { useContext, useState } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../Contextapi';
// import grocery from '../../assets/logo.png';


// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate('/');
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     // Future: Implement search functionality with products filter
//     console.log("Searching:", e.target.value);
//   };

//   return (                                                  
//     <div className="navbar">
//       <Link to="/"><img src={grocery} alt="Logo" height={300} width={300} /></Link>
      
//       {/* Navbar Menu */}
//       <ul className="navbar-menu">
//         <Link to="/" onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ""}>Home</Link>
//         <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === 'menu' ? "active" : ""}>Menu</a>
//         <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? "active" : ""}>Mobile App</a>
//         <a href="#footer" onClick={() => setMenu("contact us")} className={menu === 'contact us' ? 'active' : ""}>Contact Us</a>
//       </ul>

//       {/* ✅ Search Bar */}
//       <div className="navbar-search">
//         <input 
//           type="text" 
//           placeholder="Search for products..." 
//           value={searchQuery} 
//           onChange={handleSearch} 
//         />
//         <button><img src={assets.search_icon} alt="Search" /></button>
//       </div>

//       {/* Navbar Right */}
//       <div className="navbar-right">
//         <div className="navbar-search-icon">
//           <Link to="/cart"><img src={assets.basket_icon} alt="Cart" /></Link>
//           <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//         </div>

//         {!token ? (
//           <button onClick={() => setShowLogin(true)}>Sign In</button>
//         ) : (
//           <div className="navbar-profile">
//             <img src={assets.profile_icon} alt="Profile" />
//             <ul className="nav-profile-dropdown">
//               <li onClick={() => navigate('/myorder')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
//               <hr />
//               <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { StoreContext } from '../Contextapi';

// const Navbar = ({ setShowLogin }) => {
//     const [menu, setMenu] = useState("home")
//     const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//     const navigate = useNavigate();

//     const logout = () => {
//         localStorage.removeItem("token");
//         setToken("");
//         navigate('/');


//     }
//     return (
//         <div className='navbar'>
//             <Link to='/'><img src={assets.logo} alt="" /></Link>
//             <ul className='navbar-menu'>
//                 <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ""}>Home</Link>
//                 <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? "active" : ""}>Menu</a>
//                 <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? "active" : ""}>Mobile-app</a>
//                 <a href='#footer' onClick={() => setMenu("contact us")} className={menu === 'contact us' ? 'active' : ""}>Contact us</a>

//             </ul>
//             <div className="navbar-right">
//                 <img src={assets.search_icon} alt="" />
//                 <div className="navbar-search-icon">
//                     <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
//                     <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>

//                 </div>
//                 {!token ? <button onClick={() => setShowLogin(true)}>sign in</button> :
//                     <div className='navbar-profile'>
//                         <img src={assets.profile_icon} alt="" />
//                         <ul className="nav-profile-dropdown">
//                             <li onClick={() => navigate('/myorder')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
//                             <hr />
//                             <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
//                         </ul></div>}

//             </div>

//         </div>
//     )
// }

// export default Navbar






// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { StoreContext } from "../Contextapi";
// import { assets } from "../../assets/assets";
// import './Navbar.css';
// const Navbar = ({ setShowLogin }) => {
//   const [open, setOpen] = useState(false);
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };

//   return (
//     <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
//       {/* Logo */}
//       <Link to="/">
//         <img src={assets.logo} alt="Logo" className="h-10" />
//       </Link>

//       {/* Desktop Menu */}
//       <div className="hidden sm:flex items-center gap-8">
//         <Link
//           to="/"
//           onClick={() => setMenu("home")}
//           className={`hover:text-indigo-600 transition ${
//             menu === "home" ? "text-indigo-600 font-semibold" : ""
//           }`}
//         >
//           Home
//         </Link>
//         <a
//           href="#explore-menu"
//           onClick={() => setMenu("menu")}
//           className={`hover:text-indigo-600 transition ${
//             menu === "menu" ? "text-indigo-600 font-semibold" : ""
//           }`}
//         >
//           Menu
//         </a>
//         <a
//           href="#app-download"
//           onClick={() => setMenu("mobile-app")}
//           className={`hover:text-indigo-600 transition ${
//             menu === "mobile-app" ? "text-indigo-600 font-semibold" : ""
//           }`}
//         >
//           Mobile App
//         </a>
//         <a
//           href="#footer"
//           onClick={() => setMenu("contact us")}
//           className={`hover:text-indigo-600 transition ${
//             menu === "contact us" ? "text-indigo-600 font-semibold" : ""
//           }`}
//         >
//           Contact Us
//         </a>

//         {/* Search Box */}
//         <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
//           <input
//             className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
//             type="text"
//             placeholder="Search products"
//           />
//           <img src={assets.search_icon} alt="search" className="w-4 h-4" />
//         </div>

//         {/* Cart */}
//         <div className="relative cursor-pointer">
//           <Link to="/cart">
//             <img src={assets.basket_icon} alt="cart" className="w-6 h-6" />
//           </Link>
//           {getTotalCartAmount() !== 0 && (
//             <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] flex items-center justify-center rounded-full">
//               {getTotalCartAmount()}
//             </span>
//           )}
//         </div>

//         {/* Profile / Login */}
//         {!token ? (
//           <button
//             onClick={() => setShowLogin(true)}
//             className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
//           >
//             Sign In
//           </button>
//         ) : (
//           <div className="relative group">
//             <img
//               src={assets.profile_icon}
//               alt="profile"
//               className="w-8 h-8 cursor-pointer"
//             />
//             <ul className="absolute right-0 top-10 w-40 bg-white shadow-md rounded-lg hidden group-hover:block">
//               <li
//                 onClick={() => navigate("/myorder")}
//                 className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               >
//                 <img src={assets.bag_icon} alt="orders" className="w-4 h-4" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li
//                 onClick={logout}
//                 className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               >
//                 <img src={assets.logout_icon} alt="logout" className="w-4 h-4" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Mobile Menu Toggle */}
//       <button
//         onClick={() => setOpen(!open)}
//         aria-label="Menu"
//         className="sm:hidden"
//       >
//         <svg
//           width="21"
//           height="15"
//           viewBox="0 0 21 15"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect width="21" height="1.5" rx=".75" fill="#426287" />
//           <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
//           <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
//         </svg>
//       </button>

//       {/* Mobile Menu */}
//       <div
//         className={`${
//           open ? "flex" : "hidden"
//         } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
//       >
//         <Link to="/" className="block" onClick={() => setOpen(false)}>
//           Home
//         </Link>
//         <a href="#explore-menu" className="block" onClick={() => setOpen(false)}>
//           Menu
//         </a>
//         <a
//           href="#app-download"
//           className="block"
//           onClick={() => setOpen(false)}
//         >
//           Mobile App
//         </a>
//         <a href="#footer" className="block" onClick={() => setOpen(false)}>
//           Contact Us
//         </a>

//         {!token ? (
//           <button
//             onClick={() => {
//               setShowLogin(true);
//               setOpen(false);
//             }}
//             className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
//           >
//             Sign In
//           </button>
//         ) : (
//           <button
//             onClick={logout}
//             className="cursor-pointer px-6 py-2 mt-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full text-sm"
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { StoreContext } from "../Contextapi";
// import { assets } from "../../assets/assets";
// import "./Navbar.css";

// const Navbar = ({ setShowLogin }) => {
//   const [open, setOpen] = useState(false);
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };

//   return (
//     <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
//       {/* Logo */}
//       <Link to="/">
//         <img src={assets.logo} alt="Logo" className="h-10" />
//       </Link>

//       {/* Desktop Menu */}
//       <div className="hidden sm:flex items-center gap-8 flex-1">
//         <Link
//           to="/"
//           onClick={() => setMenu("home")}
//           className={`hover:text-indigo-600 transition ${
//             menu === "home" ? "text-indigo-600 font-semibold" : ""
//           }`}
//         >
//           Home
//         </Link>
//         <a
//           href="#explore-menu"
//           onClick={() => setMenu("menu")}
//           className={`hover:text-indigo-600 transition ${
//             menu === "menu" ? "text-indigo-600 font-semibold" : ""
//           }`}
//         >
//           Menu
//         </a>
//         <a
//           href="#app-download"
//           onClick={() => setMenu("mobile-app")}
//           className={`hover:text-indigo-600 transition ${
//             menu === "mobile-app" ? "text-indigo-600 font-semibold" : ""
//           }`}
//         >
//           Mobile App
//         </a>
//         <a
//           href="#footer"
//           onClick={() => setMenu("contact us")}
//           className={`hover:text-indigo-600 transition ${
//             menu === "contact us" ? "text-indigo-600 font-semibold" : ""
//           }`}
//         >
//           Contact Us
//         </a>

//         {/* Search Box */}
//         <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
//           <input
//             className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
//             type="text"
//             placeholder="Search products"
//           />
//           <img src={assets.search_icon} alt="search" className="w-4 h-4" />
//         </div>

//         {/* Cart */}
//         <div className="relative cursor-pointer">
//           <Link to="/cart">
//             <img src={assets.basket_icon} alt="cart" className="w-6 h-6" />
//           </Link>
//           {getTotalCartAmount() !== 0 && (
//             <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] flex items-center justify-center rounded-full">
//               {getTotalCartAmount()}
//             </span>
//           )}
//         </div>

//         {/* Right side Profile / Login */}
//         <div className="ml-auto relative">
//           {!token ? (
//             <button
//               onClick={() => setShowLogin(true)}
//               className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
//             >
//               Sign In
//             </button>
//           ) : (
//             <div className="relative group">
//               <img
//                 src={assets.profile_icon}
//                 alt="profile"
//                 className="w-9 h-9 cursor-pointer rounded-full border border-gray-300"
//               />
//               {/* Dropdown */}
//               <ul className="absolute right-0 top-12 w-44 bg-white shadow-lg rounded-lg hidden group-hover:block z-50">
//                 <li
//                   onClick={() => navigate("/myorder")}
//                   className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
//                 >
//                   <img src={assets.bag_icon} alt="orders" className="w-4 h-4" />
//                   <span>My Orders</span>
//                 </li>
//                 <hr className="border-gray-200" />
//                 <li
//                   onClick={logout}
//                   className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
//                 >
//                   <img
//                     src={assets.logout_icon}
//                     alt="logout"
//                     className="w-4 h-4"
//                   />
//                   <span>Logout</span>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Toggle */}
//       <button
//         onClick={() => setOpen(!open)}
//         aria-label="Menu"
//         className="sm:hidden"
//       >
//         <svg
//           width="21"
//           height="15"
//           viewBox="0 0 21 15"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect width="21" height="1.5" rx=".75" fill="#426287" />
//           <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
//           <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
//         </svg>
//       </button>

//       {/* Mobile Menu */}
//       <div
//         className={`${
//           open ? "flex" : "hidden"
//         } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-40`}
//       >
//         <Link to="/" className="block" onClick={() => setOpen(false)}>
//           Home
//         </Link>
//         <a href="#explore-menu" className="block" onClick={() => setOpen(false)}>
//           Menu
//         </a>
//         <a
//           href="#app-download"
//           className="block"
//           onClick={() => setOpen(false)}
//         >
//           Mobile App
//         </a>
//         <a href="#footer" className="block" onClick={() => setOpen(false)}>
//           Contact Us
//         </a>

//         {!token ? (
//           <button
//             onClick={() => {
//               setShowLogin(true);
//               setOpen(false);
//             }}
//             className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
//           >
//             Sign In
//           </button>
//         ) : (
//           <>
//             <button
//               onClick={() => {
//                 navigate("/myorder");
//                 setOpen(false);
//               }}
//               className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm w-full text-left"
//             >
//               My Orders
//             </button>
//             <button
//               onClick={logout}
//               className="cursor-pointer px-6 py-2 mt-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full text-sm w-full text-left"
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;












//food restorent wala code
// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { StoreContext } from "../Contextapi";
// import { assets } from "../../assets/assets";
// import "./Navbar.css";

// const Navbar = ({ setShowLogin }) => {
//     const [open, setOpen] = useState(false);
//     const [menu, setMenu] = useState("home");
//     const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//     const navigate = useNavigate();

//     const logout = () => {
//         localStorage.removeItem("token");
//         setToken("");
//         navigate("/");
//     };

//     return (
//         <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
//             {/* Logo - Bigger and Left Corner */}
//             <Link to="/" className="absolute top-3 left-6">
//                 <img src={assets.logo} alt="Logo" className="h-16 w-auto md:h-20 lg:h-24 object-contain" />
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden sm:flex items-center gap-8 flex-1 justify-center">
//                 <Link
//                     to="/"
//                     onClick={() => setMenu("home")}
//                     className={`hover:text-indigo-600 transition ${
//                         menu === "home" ? "text-indigo-600 font-semibold" : ""
//                     }`}
//                 >
//                     Home
//                 </Link>
//                 <a
//                     href="#explore-menu"
//                     onClick={() => setMenu("menu")}
//                     className={`hover:text-indigo-600 transition ${
//                         menu === "menu" ? "text-indigo-600 font-semibold" : ""
//                     }`}
//                 >
//                     Menu
//                 </a>
//                 <a
//                     href="#app-download"
//                     onClick={() => setMenu("mobile-app")}
//                     className={`hover:text-indigo-600 transition ${
//                         menu === "mobile-app" ? "text-indigo-600 font-semibold" : ""
//                     }`}
//                 >
//                     Mobile App
//                 </a>
//                 <a
//                     href="#footer"
//                     onClick={() => setMenu("contact us")}
//                     className={`hover:text-indigo-600 transition ${
//                         menu === "contact us" ? "text-indigo-600 font-semibold" : ""
//                     }`}
//                 >
//                     Contact Us
//                 </a>

//                 {/* Search Box */}
//                 <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
//                     <input
//                         className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
//                         type="text"
//                         placeholder="Search products"
//                     />
//                     <img src={assets.search_icon} alt="search" className="w-4 h-4" />
//                 </div>

//                 {/* Cart */}
//                 <div className="relative cursor-pointer">
//                     <Link to="/cart">
//                         <img src={assets.basket_icon} alt="cart" className="w-6 h-6" />
//                     </Link>
//                     {getTotalCartAmount() !== 0 && (
//                         <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] flex items-center justify-center rounded-full">
//                             {getTotalCartAmount()}
//                         </span>
//                     )}
//                 </div>

//                 {/* Right side Profile / Login */}
//                 <div className="ml-auto flex items-center gap-4">
//                     {!token ? (
//                         <button
//                             onClick={() => setShowLogin(true)}
//                             className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
//                         >
//                             Sign In
//                         </button>
//                     ) : (
//                         <>
//                             <button
//                                 onClick={() => navigate("/myorder")}
//                                 className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
//                             >
//                                 My Orders
//                             </button>
//                             <button
//                                 onClick={logout}
//                                 className="cursor-pointer px-6 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full text-sm"
//                             >
//                                 Logout
//                             </button>
//                             <img
//                                 src={assets.profile_icon}
//                                 alt="profile"
//                                 className="w-9 h-9 rounded-full border border-gray-300"
//                             />
//                         </>
//                     )}
//                 </div>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button
//                 onClick={() => setOpen(!open)}
//                 aria-label="Menu"
//                 className="sm:hidden ml-auto"
//             >
//                 <svg
//                     width="21"
//                     height="15"
//                     viewBox="0 0 21 15"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <rect width="21" height="1.5" rx=".75" fill="#426287" />
//                     <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
//                     <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
//                 </svg>
//             </button>

//             {/* Mobile Menu */}
//             <div
//                 className={`${
//                     open ? "flex" : "hidden"
//                 } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-40`}
//             >
//                 <Link to="/" className="block" onClick={() => setOpen(false)}>
//                     Home
//                 </Link>
//                 <a href="#explore-menu" className="block" onClick={() => setOpen(false)}>
//                     Menu
//                 </a>
//                 <a
//                     href="#app-download"
//                     className="block"
//                     onClick={() => setOpen(false)}
//                 >
//                     Mobile App
//                 </a>
//                 <a href="#footer" className="block" onClick={() => setOpen(false)}>
//                     Contact Us
//                 </a>

//                 {!token ? (
//                     <button
//                         onClick={() => {
//                             setShowLogin(true);
//                             setOpen(false);
//                         }}
//                         className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
//                     >
//                         Sign In
//                     </button>
//                 ) : (
//                     <>
//                         <button
//                             onClick={() => {
//                                 navigate("/myorder");
//                                 setOpen(false);
//                             }}
//                             className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm w-full text-left"
//                         >
//                             My Orders
//                         </button>
//                         <button
//                             onClick={logout}
//                             className="cursor-pointer px-6 py-2 mt-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full text-sm w-full text-left"
//                         >
//                             Logout
//                         </button>
//                     </>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;







//gap problem but thikh h ye navbar 
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Contextapi";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      {/* Logo Left */}
      <Link to="/" className="flex-shrink-0">
        <img
          src={assets.logo}
          alt="Logo"
          className="h-16 w-auto md:h-20 lg:h-24 object-contain"
        />
      </Link>

      {/* Center Menu + Search + Cart */}
      <div className="hidden sm:flex flex-1 items-center justify-center gap-8">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`hover:text-indigo-600 transition ${
            menu === "home" ? "text-indigo-600 font-semibold" : ""
          }`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`hover:text-indigo-600 transition ${
            menu === "menu" ? "text-indigo-600 font-semibold" : ""
          }`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={`hover:text-indigo-600 transition ${
            menu === "mobile-app" ? "text-indigo-600 font-semibold" : ""
          }`}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={`hover:text-indigo-600 transition ${
            menu === "contact us" ? "text-indigo-600 font-semibold" : ""
          }`}
        >
          Contact Us
        </a>

        {/* Search Box */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" className="w-6 h-6" />
          </Link>
          {getTotalCartAmount() !== 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] flex items-center justify-center rounded-full">
              {getTotalCartAmount()}
            </span>
          )}
        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
          >
            Sign In
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate("/myorder")}
              className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
            >
              My Orders
            </button>
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full text-sm"
            >
              Logout
            </button>
            <img
              src={assets.profile_icon}
              alt="profile"
              className="w-9 h-9 rounded-full border border-gray-300"
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;






