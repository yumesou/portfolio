import React from "react";
import './Header.css';
import './Responsive.css';

import Home from '../../assets/img/header/icon/home.svg';
import Skills from '../../assets/img/header/icon/skills.svg';
import Projects from '../../assets/img/header/icon/projects.svg';
import Contact from '../../assets/img/header/icon/contact.svg';

// eslint-disable-next-line
export default props =>
<>
    <div className="header">
        <img src="assets/img/logo.svg" alt="logo" className="logo" />

        <div className="lists">
            <ul className="list-links pc">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
            <ul className="list-links mobile">
                <li><a href="#home"><img src={Home} alt="home" /></a></li>
                <li><a href="#skills"><img src={Skills} alt="home" /></a></li>
                <li><a href="#projects"><img src={Projects} alt="home" /></a></li>
                <li><a href="#contact"><img src={Contact} alt="home" /></a></li>
            </ul>
            <ul className="list-social">
                <li><a href="https://github.com/yumesou" target='_blank' rel="noreferrer"><img src="assets/img/header/git.svg" alt="git" /></a></li>
                <li><a href="https://canarys.store/youtube" target='_blank' rel="noreferrer"><img src="assets/img/header/youtube.svg" alt="yt" /></a></li>
                <li><a href="https://www.linkedin.com/in/yume-souza-b406a0268/" target='_blank' rel="noreferrer"><img src="assets/img/header/linkedin.svg" alt="lkin" /></a></li>
            </ul>
        </div>
    </div>
</>