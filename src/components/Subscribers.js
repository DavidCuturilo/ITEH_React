import React from 'react'
import '../App.css';
import './Subscribers.css';


function Subscribers({subscribersNum}) {
    return (
        <div className='subscribers'>
            <h3>Subscribers count: {subscribersNum} </h3>
        </div>
    )
}

export default Subscribers;