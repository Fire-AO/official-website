// CardNews.js

import React from 'react';
import "./CardNews.css";

function CardNews({ name, description ,image}) {
    return (
        <div className="card-news">
            <p id='cardname'>{name}</p>
            <img src={image} alt={`${name} thumbnail`} className="executive-thumbnail" />
            <p id='carddes'>{description}</p>
        </div>
    );
}

export default CardNews;
