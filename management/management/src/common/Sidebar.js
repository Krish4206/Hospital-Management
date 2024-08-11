import React, { useEffect } from 'react'
import logo from "../assets/logo.jpg"
import "./Sidebar.css"

const Sidebar = ({activeTabIndex,setActiveTabIndex}) => {

    useEffect(()=>{
        let links = Array.from(document.querySelectorAll(".nav-pills .nav-item"))
        links.filter(item => item.querySelector('a.nav-link')).forEach((link,i)=>{
            link.addEventListener('click',function(){
                setActiveTabIndex(i+1);
            });
        })
    },[])
    return (
        <div className="sidebar d-flex flex-column flex-shrink-0 bg-light" style={{ width: "280px" }}>
            {/* <div className='logoWrapper'>
            <a href="/" className="logo d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img src={logo} alt="logo" />
                <span className="fs-5">AllymarHealth</span>
            </a>
            </div> */}
            
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                   <span className='nav-link'>Menu</span>
                </li>
                <li className="nav-item">
                    <a href="#" className={`nav-link ${activeTabIndex == 1 ? 'active' : ''}`}>
                        <i className="fa-solid fa-list"></i>
                        Org List
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className={`nav-link ${activeTabIndex == 2 ? 'active' : ''}`}>
                        <i className="fa-solid fa-users"></i>
                       User List
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className={`nav-link ${activeTabIndex == 3 ? 'active' : ''}`}>
                    <i className="fa-solid fa-gear"></i>
                        Settings
                    </a>
                </li>
            </ul>
            {/* <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div> */}
        </div>
    )
}

export default Sidebar
