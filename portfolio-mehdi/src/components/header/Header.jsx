import React, { useState } from "react";
import './styleHeader.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ScreenshotMonitorOutlinedIcon from '@mui/icons-material/ScreenshotMonitorOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import photo from '../../vendor/img/pp.jpg';

function Header(){

const [activeSection, setActiveSection] = useState(1);

// Mettre à jour l'élément "active"
const handleClick = (index) => {
    setActiveSection(index);  
  };

    return(

        
        <>
    
        <header className="header">
            <div className="nav-bar">
                <div className="profile">
                    <img src={photo} className="image-pp"/>
                    <h1 className="text-h1">
                        <a href="/">Chebbah Mehdi </a>
                    </h1>
                    <div className="social-links">
                        <a href="">
                            <i></i>
                        </a>
                        <a href="">
                            <i></i>
                        </a>
                        <a href="">
                            <i></i>
                        </a>
                    </div>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li className={activeSection === 1 ? 'active' : ''}
                            onClick={() => handleClick(1)}>
                            <a href="/">
                                <i className="bx bx-home"><HomeOutlinedIcon></HomeOutlinedIcon></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className={activeSection === 2 ? 'active' : ''}
                            onClick={() => handleClick(2)}>
                            <a href="#resume">
                            <i className="bx bx-home"><Person2OutlinedIcon></Person2OutlinedIcon></i>
                                Resume
                            </a>
                        </li>
                        <li className={activeSection === 3 ? 'active' : ''}
                            onClick={() => handleClick(3)}>
                            <a href="#mySkills">
                                <i className="bx bx-home"><LibraryBooksOutlinedIcon></LibraryBooksOutlinedIcon></i>
                                My Skills
                            </a>
                        </li>
                        <li className={activeSection === 4 ? 'active' : ''}
                            onClick={() => handleClick(4)}>
                            <a href="#projects">
                                <i className="bx bx-home"><ScreenshotMonitorOutlinedIcon></ScreenshotMonitorOutlinedIcon></i>
                                Projects  
                            </a>
                        </li>
                        <li className={activeSection === 5 ? 'active' : ''}
                            onClick={() => handleClick(5)}>
                            <a href="#contact">
                                <i className="bx bx-home"><MailOutlineOutlinedIcon></MailOutlineOutlinedIcon></i>
                                Contact me
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
              </>
    )
}

export default Header;