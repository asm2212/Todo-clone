// import React, { useState } from 'react';
// import logo from '../../assets/logo.png';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 
//   const [user, setUser] = useState(null);

//   const mockUser = {
//     name: 'Asmare Admasu',
//     email: 'asmareadmasu0@gmail.com'
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setUser(mockUser); 
//     console.log(mockUser);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUser(null); 
//   };

//   return (
//     <div className='flex items-center justify-between py-4 px-8 bg-gray-800 text-white'>
//       <div className='flex items-center'>
//         <img className='w-4 h-4 mr-2' src={logo} alt="Microsoft To-Do Logo" />
//       </div>
//       <div className='flex items-center'>
//         {isLoggedIn ? (
//           <div>
//             <p className='text-sm mr-4'>{user.name}</p>
//             <p className='text-xs'>{user.email}</p>
//             <button onClick={handleLogout} className='ml-4'>Logout</button>
//           </div>
//         ) : (
//           <div>
//             <button onClick={handleLogin} className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full'>Login</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
