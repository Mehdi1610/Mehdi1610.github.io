import React from "react";
import './styleHome.css'
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from "react";
import Header from "../../components/header/Header.jsx"
import HomeSection from "../../components/homeSection/HomeSection.jsx";
import Contact from "../../components/contact/Contact.jsx";
import Resume from "../../components/resume/Resume.jsx";
import MySkills from "../../components/mySkills/MySkills.jsx";
import Projects from "../../components/projects/Projects.jsx";


function Home() {

    const [isOpen, setOpen] = useState(true);

    function handleNavBar(){
        const navBar = document.querySelector("Header")
        if(isOpen === true){
            navBar.classList.add("hidden-nav-bar")
        }
        else{
            navBar.classList.remove("hidden-nav-bar")
        }
    }


    return (
    <>
    
    <div className="nav-toggle" onClick={handleNavBar}>
        <Hamburger color="#149DDD" toggled={isOpen} toggle={setOpen} direction="left" size={24} />
    </div>
    <div className="main-container">
        <Header/>
        <HomeSection/>
    </div>
    <main id="main">
            <Resume/>
            <MySkills/>
            <Projects/>
            <Contact/>
        </main>
    
    
    </>
    );


}





export default Home;