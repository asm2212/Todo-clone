import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const AllRoutes = () => {
  return (
    <Router>
      <div>
      <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </div>
    </Router>
  );
};

 export default AllRoutes;

// import { BrowserRouter as Router, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Your other components */}
//         <Route path="/" exact component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         {/* More routes */}
//       </div>
//     </Router>
//   );
// }