import React from 'react'
import "./header.css"
import NetflixlogoPng from "../../assets/Images/Netflix-Brand-Logo.png";
// import Search from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "react-icons/fa";
import { faSearch, faBell, faUser, faCaretDown   } from "@fortawesome/free-solid-svg-icons";




function Header() {
  return (
    <div id="header" className="header_outer_container">
      <div className="header_cont container">
        <div className="left-cont">
          <ul className="main-nav">
            <li className="headerlogo">
              <a href="#">
                <img src={NetflixlogoPng} alt="NetflixLogo" width="100" />
              </a>
            </li>
            <li className="nav-item active">Home</li>
            <li className="nav-item">Tv Shows</li>
            <li className="nav-item">Movies</li>
            <li className="nav-item">News & Popular</li>
            <li className="nav-item">My List</li>
            <li className="nav-item">Browse by Languages</li>
          </ul>
        </div>
        <div className="right-cont">
          <div className="right-cont">
            <ul className="main-nav spaces">
              <li>
                <FontAwesomeIcon icon={faSearch} className="navbar__icon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faBell} className="notification__icon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCaretDown} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
