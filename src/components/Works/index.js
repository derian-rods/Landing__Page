import React from 'react'
import { Slider } from './Slider'

export const SectionWorks = () => {
    return (
        <section id="works">
             <div className="Works__title">
                    <h2 className="Works__h2">Personal jobs & projects </h2>
                </div>
                <div className="works__container">
                    <Slider />
                </div>
        </section>
    )
}
