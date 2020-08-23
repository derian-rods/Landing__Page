import React from 'react'
import uk from '../../assets/uk .svg'

export const ToolBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__language">
                <button className="btn btn-round active">
                    <img className="navbar__img" src={uk} alt="English"></img>
                </button>
            </div>
            <div className="navbar__social" >
                <button className="btn btn-round"><i className="fab fa-linkedin-in" aria-hidden="true"></i></button>
                <button className="btn btn-round"><i className="fab fa-github"></i></button>
            </div>
        </nav>
    )
}
