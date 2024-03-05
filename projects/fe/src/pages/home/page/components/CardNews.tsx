// CardNews.js

import "@/pages/home/page/css/CardNews.css";

interface CardNewsProps {
    name: string;
    description: string;
    image: string;
}

const CardNews: React.FC<CardNewsProps> = ({ name, description ,image}) => {
    return (
        <div className="card-news">
            <p id='cardname'>{name}</p>
            <img src={image} alt={`${name} thumbnail`} className="executive-thumbnail" />
            <p id='carddes'>{description}</p>
        </div>
    );
}

export default CardNews;
