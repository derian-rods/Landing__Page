import React from 'react'
import {projects} from '../../data/project'

export const Slider = () => {


    return (
        <div className="slider">
                    {
                    /* SLider loot */
                    projects.map((project, i) => (
                        <div className="slider__container" key={project.title} id={`slider${i}`}>
                        <div className="slider__description">
                             <h1 className="slider__h1"> {project.title}</h1>
                             <p className="slider__paragraph">
                                 {projects[0].description}
                             </p>
                             <a className="links" href={project.url} target="_blank" rel="noopener noreferrer">
                             <button className="btn"> View <i className="far fa-eye"></i></button>
                             </a>
                        </div>
                        <div className="slider__picture">
                            <img className="slider__img"  src={project.picture} alt=""></img>
                        </div>
                    </div>
                    ))
                    }
        </div>
    )
}
