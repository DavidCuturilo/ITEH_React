import React from 'react'
import '../App.css'
import './Section.css'
import {Button} from './Button';


function Section() {
    return (
        <div className='hero-container'>
            <h1>Travel with us!</h1>
            <div className="hero-btns">
                <Button className='btns' buttonSize='btn--large'>Begin</Button>
            </div>
        </div>
    )
}

export default Section;