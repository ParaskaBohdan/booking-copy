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
                <li className="NavList active">
                <NavLink to='/' className= {({isActive}) => isActive ? activeLink : normalLink}>
                    <img src="/images/nav-home.svg" alt="" />
                    <span>Головна</span>
                </NavLink>
                </li>

                <li className="NavList">
                    <img src="/images/nav-messaging.svg" alt="" />
                    <span>Повідомлення</span>

                </li>
                <li className="NavList">
                    <span>Сповіщення</span>
                </li>
                <li className="Navlist">
                    <NavLink to='/login' className= {({isActive}) => isActive ? activeLink : normalLink}>
                        <span>Вхід</span>
                    </NavLink>
                </li>
            </ul>
            </nav>
        </div>
    </div>
  );
};

export default Header;
