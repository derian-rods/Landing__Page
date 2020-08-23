import React from 'react'
import Avatar from '../../assets/avatar.png'

export const AboutMe = () => {
    return (
        <section id="aboutme">
                <div className="about">
                    <div className="about__Me">
                        <h1 className="about__Title" >Hi I´m Derian</h1>
                        <p className="about__paragraphs">
                        I'm a  <strong>Junior Front-End Developer</strong> from Utrera, Spain. <br/>
                        I have serious passion for development (client side of the web) and keep learning.
                        </p>
                        <a className="link" href="#works">
                            <button className="btn btn__about"> View Projects <span><i className="fas fa-location-arrow btn-icon"></i></span></button>
                        </a>
                    </div>
                    <div className="about__Avatar">
                        <img src={Avatar} className="about__img" alt="Derian Rodriguez Salazar"></img>
                    </div>
                </div>
        </section>
    )
}
