import React from "react";
import 'animate.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Counter from "../Basic/Counter";
import './Skills.css'


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
    return (
        <section className="skill" id="skills">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="skill-bx wow zoomIn">
                    <h2 className="title-skills">Minhas habilidades</h2>
                    <p>
                      Veja aqui quais são as ferramentas nas quais utilizo no meu dia-dia!
                    </p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <Counter title='Javascript' percent='50' size='200'/>
                        <Counter title='Lua' percent='80' size='200'/>
                        <Counter title='HTML/CSS' percent='70' size='200'/>
                        <Counter title='React.Js' percent='40' size='200'/>
                        <Counter title='UX Design' percent='50' size='200'/>
                    </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}