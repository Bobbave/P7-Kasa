import React from "react";
import {Link} from "react-router-dom";

const Card = ({property}) => {
  return (
    <div className="card">
      <Link to={`/accomodation/${property.id}`}>
        <div className="card_image">
          <img src={property.cover} alt="Intérieur logement"  />
          <div className='card_shadow'/>
        </div>
        <h3>{property.title}</h3>
      </Link>
    </div>
  );
};

export default Card;