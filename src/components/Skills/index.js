import React from 'react';
import Skills from '../../assets/skills.svg';

export const SkillsExperience = () => {
    return (
        <section id="skills">
                <div className="Skills__title">
                    <h2 className="skills__h2"> Skills & Experience </h2>
                </div>
            <div className="wrap__center">
                 <div className="Skills__container">
                <div className="Skills__paragraph">
                        <p>Currently I continue with my learning while doing Freelance work.
                            The main area of my expertise is front end development (client side of the web)
                           <strong> HTML, CSS, JS, CMS </strong> building small and medium web apps with <strong>React.</strong></p>
                </div>
                <div className="Skills__ability">
                    <div className="Skills__ability__cotainer">
                        <img className="Skills__img" src={Skills} alt="skills"></img>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
