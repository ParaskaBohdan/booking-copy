import { connect } from "react-redux";
import styled from "styled-components";
import AccountIcon from '../../images/icons/icons8-account-64.png'
import './style.css'

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
          <a>
            <img src="/images/nav-home.svg" alt="" />
            <span>Головна</span>
          </a>
        </li>

        <li className="NavList">
          <a>
            <img src="/images/nav-network.svg" alt="" />
            <span>Моя мережа</span>
          </a>
        </li>
        <li className="NavList">
          <a>
            <img src="/images/nav-jobs.svg" alt="" />
            <span>Вакансії</span>
          </a>
        </li>
        <li className="NavList">
          <a>
            <img src="/images/nav-messaging.svg" alt="" />
            <span>Повідомлення</span>
          </a>
        </li>
        <li className="NavList">
          <a>
            <img src="/images/nav-notifications.svg" alt="" />
            <span>Сповіщення</span>
          </a>
        </li>

        <li className="User">
          <a>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="" />
            ) : (
              <img src={AccountIcon} alt="" />
            )}
          </a>
          <div className="SignOut">
            <a>Вийти</a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</div>

  );
};

export default Header;
