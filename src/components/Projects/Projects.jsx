import React from "react";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import './Projects.css';
import { ProjectCard } from "../Card/Card";

import templateImage from '../../assets/img/projects/template.png';

// eslint-disable-next-line
export default props => {
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
                        <div className="projects">
                            {projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                    />
                                )
                            })}
                        </div>
                    </div>}
            </TrackVisibility>
        </section>
    )
}