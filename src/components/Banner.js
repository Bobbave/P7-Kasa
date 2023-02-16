import React from "react";
import shadow_background from "../assets/shadow_background.png";

const Banner = ({img, text1, text2}) => {
    return (
        <div className="banner">
            <img src={img} alt="Paysage" className="background_image" />
            <img src={shadow_background} alt="Ombre de la bannière" className="shadow_background" />
            <div className="banner_text">
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        </div>
    );
};

export default Banner;