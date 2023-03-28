import React from "react";
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import 'animate.css';
import './Projects.css';
import { ProjectCard } from "../Card/Card";
import './Responsive.css';

import templateImage from '../../assets/img/projects/template.png';

// eslint-disable-next-line
export default props => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    const projects = [
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: templateImage,
        url: 'https://canarys.store'
        },
        {
        title: "Business Startup",  
        description: "Design & Development",
        imgUrl: templateImage,
        url: 'https://canarys.store'
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: templateImage,
        url: 'https://canarys.store'
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: templateImage,
        url: 'https://canarys.store'
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: templateImage,
        url: 'https://canarys.store'
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: templateImage,
        url: 'https://canarys.store'
        },
    ];

    return (
        <section className="project" id="projects">
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2 className="project-title">Projetos</h2>
                        <p className="project-desc">Aqui estão algumas amostras de projetos concluidos por mim! Fique à vontade para olhar melhor.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        {/* <div className="projects"> */}
                            {projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                    />
                                )
                            })}
                        </Carousel>
                        {/* </div> */}
                    </div>}
            </TrackVisibility>
        </section>
    )
}