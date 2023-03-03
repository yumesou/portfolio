import React from "react";
import './Header.css';

// eslint-disable-next-line
export default props =>
<>
    <div className="header">
        <img src="assets/img/logo.svg" alt="logo" className="logo" />

        <div className="lists">
            <ul className="list-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <ul className="list-social">
                <li><a href="https://github.com/yumesou" target='_blank' rel="noreferrer"><img src="assets/img/header/git.svg" alt="git" /></a></li>
                <li><a href="https://canarys.store/youtube" target='_blank' rel="noreferrer"><img src="assets/img/header/youtube.svg" alt="yt" /></a></li>
                <li><a href="https://www.linkedin.com/in/yume-souza-b406a0268/" target='_blank' rel="noreferrer"><img src="assets/img/header/linkedin.svg" alt="lkin" /></a></li>
            </ul>
        </div>
    </div>
</>