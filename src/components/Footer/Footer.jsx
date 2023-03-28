import React from "react";
import './Footer.css';
import './Responsive.css';

import Logo from '../../assets/img/logo.svg';

// eslint-disable-next-line
export default props =>
<>
    <footer>
        <img src={Logo} className="logoFooter" alt="logo" />
        <div className="copy">
            <ul className="footer-social">
                <li><a href="https://github.com/yumesou" target='_blank' rel="noreferrer"><img src="assets/img/header/git.svg" alt="git" /></a></li>
                <li><a href="https://canarys.store/youtube" target='_blank' rel="noreferrer"><img src="assets/img/header/youtube.svg" alt="yt" /></a></li>
                <li><a href="https://www.linkedin.com/in/yume-souza-b406a0268/" target='_blank' rel="noreferrer"><img src="assets/img/header/linkedin.svg" alt="lkin" /></a></li>
            </ul>
            <p>© Copyright 2023. Todos os direitos reservados.</p>
        </div>
    </footer>
</>