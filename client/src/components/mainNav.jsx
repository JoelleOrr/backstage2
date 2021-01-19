import React from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './mainNav.css';
// import Dropdown from './Dropdown';
// import Logout from './../Logout';

const MainNav = () => {
  return (
    <>
      <nav className='mainNav-items'>
        <Link to='/' className='mainNav-logo'>
          BACKSTAGE
        </Link>
        <div className='menu-icon'>
          <img
            className='profile-icon'
            src='../profileIcons/dj-icon.png'
            alt='dj icon'
          />
        </div>
      </nav>
    </>
  );
};

// const MainNav = () => {
//   return (
//     <nav className="main-nav-container">
//      <div className="main-nav-2">
//             <Link to="/" className="main-nav-pro">
//                 BACKSTAGE
//             </Link>
//         <div className="main-nav-4">
//           <ul className="main-nav-ul"></ul>
//         </div>
//         <div>
//         <div className="drop-down">
//             <button>
//               <img
//                 className="profile-icon"
//                 src="../profileIcons/dj-icon.png"
//                 alt="dj icon"
//               />
//             </button>

//             <ul className="drop-down-menu" id="show">
//               <li>
//                 <Link
//                   to="/login"
//                   className="change-me"
//                 >
//                   Login
//                 </Link>
//               </li>
//               <li className="change-me-2">
//                 <Logout>Logout</Logout>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
export default MainNav;
