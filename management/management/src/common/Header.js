import React from 'react';
import './Header.css'; // Import the CSS file for styling
import logo from "../assets/logo.jpg"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span className='fs-5'>AllymarHealth</span>
      </div>
      <div className="user-profile">
        <div className="user-info">
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="user-avatar">LW</div>
                    <strong>John William</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
        <div className="notifications">
            <i class="fa-regular fa-bell" style={{color: "#000000"}}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
