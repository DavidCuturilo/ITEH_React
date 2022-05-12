import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import sea from '../images/sea.jpg';
import mountain from '../images/mountain.jpg';
import history from '../images/history.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>See all available destinations</h1>
        <div className="cards__wrapper">
            <ul className="cards__items">
            <CardItem
            src={sea}
            text="Explore beautiful beaches"
            label="Tropical destinations"
            path="/offer"
            />
             <CardItem
            src={mountain}
            text="Explore the highest peaks"
            label="Hiking"
            path="/offer"
            />
             <CardItem
            src={history}
            text="Explore other cultures"
            label="Historical sights"
            path="/offer"
            />
            </ul>
        </div>
        </div>
    )
}

export default Cards;