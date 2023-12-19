import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './style.css';

const activeLink = "NavList active";
const normalLink = "NavList";
const theme = createTheme({
    palette: {
      primary: {
        main: '#daedec',
      },
    },
  });

const Header = (props) => {
  const token = localStorage.getItem('access_token');

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar className="Content">
        <div className="Logo">
          <NavLink to="/home">
            <img src="/images/Logotype.svg" alt="" />
          </NavLink>
        </div>
        <nav className="Nav">
          <ul className="NavListWrap">
            <li className="NavList">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </NavLink>
            </li>

            <li className="NavList">
              <NavLink to="/dwelling" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                <span>Dwelling</span>
              </NavLink>
            </li>

            {!token && (
              <>
                <li className="Navlist">
                  <NavLink
                    to="/login"
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span>Sign in</span>
                  </NavLink>
                </li>
                <li className="Navlist">
                  <NavLink
                    to="/registry"
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span>Sign up</span>
                  </NavLink>
                </li>
              </>
            )}
            {token && (
              <>
              <li className="Navlist">
                  <NavLink
                    to="/user"
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span>My profile</span>
                  </NavLink>
                </li>
                <li className="Navlist">
                  <NavLink
                    to="/signout"
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span>Sign out</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;



// const Header = (props) => {
//   // Перевірка наявності токена в localStorage
//   const token = localStorage.getItem('token');

//   return (
//     <div className="Container">
//       <div className="Content">
//         <div className="Logo">
//           <a href="/home">
//             <img src="/images/Logotype.svg" alt="" />
//           </a>
//         </div>
//         <div className="Search">
//           <div>
//             <input type="text" placeholder="Search" />
//           </div>
//           <div className="SearchIcon">
//             <img src="/images/search-icon.svg" alt="" />
//           </div>
//         </div>
//         <nav className="Nav">
//           <ul className="NavListWrap">
//             <li className="NavList">
//               <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
//                 <img src="/images/nav-home.svg" alt="" />
//                 <span>Home</span>
//               </NavLink>
//             </li>

//             <li className="NavList">
//               <NavLink to='/dwelling' className={({ isActive }) => isActive ? activeLink : normalLink}>
//                 <span>Dwelling</span>
//               </NavLink>
//             </li>

//                 <li className="NavList">
//                   <span>Notification</span>
//                 </li>
//                 {!token && ( 
//                 <>
//                 <li className="Navlist">
//                   <NavLink to='/login' className={({ isActive }) => isActive ? activeLink : normalLink}>
//                     <span>Sign in</span>
//                   </NavLink>
//                 </li>
//                 <li className="Navlist">
//                   <NavLink to='/registry' className={({ isActive }) => isActive ? activeLink : normalLink}>
//                     <span>Sign up</span>
//                   </NavLink>
//                 </li>
//               </>
//             )}
//             {token && ( 
//                 <>
//                 <li className="Navlist">
//                   <NavLink to='/sign out' className={({ isActive }) => isActive ? activeLink : normalLink}>
//                     <span>Sign out</span>
//                   </NavLink>
//                 </li>
//               </>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;
