// CardNews.js

import "@/pages/home/page/assets/css/CardNews.css";

interface CardNewsProps {
    name: string;
    description: React.ReactNode;
    image: string;
}

const CardNews: React.FC<CardNewsProps> = ({ name, description, image }) => {
    return (
        <div className="card-news">
            <p id='cardname' className="text-white">{name}</p>
            <img src={image} alt={`${name} thumbnail`} className="executive-thumbnail" />
            <p id='carddes' className="font-bold dark:font-normal dark:text-white text-slate-700" >{description}</p>
        </div>
    );
}

export default CardNews;
