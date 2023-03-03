import React from "react";
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import headerImg from '../../assets/img/home/icon.svg';
import 'animate.css';
import './Home.css';

// eslint-disable-next-line
export default props => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {   
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let fullText = 'Web Developer';
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(500);
        }
    }
    return(
        <section id="home">
            <div className="texts">
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Bem-vindo(a/e) ao meu portfólio!</span>
                    <h1 className="home-title">{`Olá! Sou Yume,`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                </div>}
                </TrackVisibility>
            </div>
            <div className="image">
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
            </div>
        </section>
    )
}
