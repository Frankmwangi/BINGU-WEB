// src/components/SideMenu.js
import React from 'react';
import './SideMenu.css';
import logo from '../assets/logo.png';

const SideMenu = () => {
  return (
    <div className="side-menu">
       <img src={logo} alt="Logo" className="logo" />
       <ul className="menu-list">
        <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#explore"><i className="fas fa-compass"></i> Explore</a></li>
        <li><a href="#bot"><i className="fas fa-robot"></i> Bot</a></li>
      </ul>
      
    </div>
  );
}

export default SideMenu;




