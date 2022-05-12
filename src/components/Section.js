import React from 'react'
import '../App.css'
import './Section.css'
import {Button} from './Button';


function Section() {
    return (
        <div className='hero-container'>
            <video src='/video/travel.mp4' autoPlay loop muted/>

            <h1>Putujte sa nama!</h1>
            <p>Istrazite planetu</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle = 'btn--outline'
                buttonSize='btn--large'>Počnite</Button>


            </div>
        </div>
    )
}

export default Section;