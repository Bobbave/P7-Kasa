import React from "react";

const Rating = ({rating}) => {

    const starsTable = [];
    const emptyStar = (
        <i style={{ color: "#E3E3E3" }} className="fa-solid fa-star"></i>
    );
    const star = (
        <i style={{ color: "$color-primary" }} className="fa-solid fa-star"></i>
    );

    const StarNumber = parseInt(rating);
    const EmptyStarNumber = 5 - StarNumber;

    for (let i = 0; i < StarNumber; i++) {
        starsTable.push(star);
    }

    for (let i = 0; i < EmptyStarNumber; i++) {
        starsTable.push(emptyStar);
    }

    return (
        <>
        {
           starsTable.map((star, index) => {return <span key={index}>{star}</span>})
        }
    </>)
};

export default Rating;