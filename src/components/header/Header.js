import {NavLink} from "react-router-dom";
import './style.css'

const activeLink = "NavList active"
const normalLink = "NavList"

const Header = (props) => {
  return (
    <div className="Container">
        <div className="Content">
            <div className="Logo">
            <a href="/home">
                <img src="/images/Logotype.svg" alt="" />
            </a>
            </div>
            <div className="Search">
            <div>
                <input type="text" placeholder="Search" />
            </div>
            <div className="SearchIcon">
                <img src="/images/search-icon.svg" alt="" />
            </div>
            </div>
            <nav className="Nav">
            <ul className="NavListWrap">
                <li className="NavList">
                <NavLink to='/' className= {({isActive}) => isActive ? activeLink : normalLink}>
                    <img src="/images/nav-home.svg" alt="" />
                    <span>Home</span>
                </NavLink>
                </li>

                <li className="NavList">
                    <NavLink to='/dwelling' className= {({isActive}) => isActive ? activeLink : normalLink}>
                        <span>dwelling</span>
                    </NavLink>

                </li>
                <li className="NavList">
                    <span>Notification</span>
                </li>
                
                <li className="Navlist">
                    <NavLink to='/login' className= {({isActive}) => isActive ? activeLink : normalLink}>
                        <span>Sign in</span>
                    </NavLink>
                </li>
                <li className="Navlist">
                    <NavLink to='/registry' className= {({isActive}) => isActive ? activeLink : normalLink}>
                        <span>Sign up</span>
                    </NavLink>
                </li>
            </ul>
            </nav>
        </div>
    </div>
  );
};

export default Header;
