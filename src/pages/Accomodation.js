import React from "react";
import {useParams, Navigate} from "react-router-dom";
import Accomodations from "../data/accomodations.json";
import Carousel from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Rating from "../components/Rating";

export default function Accomodation() {
    document.title = "Kasa - Accomodation";
    let selectedId = useParams();
    let accomodationTitle;
    let accomodationPictures;
    let accomodationDesc;
    let accomodationHost;
    let accomodationRating;
    let accomodationLocation;
    let accomodationEquipments;
    let accomodationTags;

    Accomodations.forEach((accomodation) => {
        if (accomodation.id === selectedId.id) {
            accomodationTitle = accomodation.title;
            accomodationPictures = accomodation.pictures;
            accomodationDesc = accomodation.description;
            accomodationHost = accomodation.host;
            accomodationRating = accomodation.rating;
            accomodationLocation = accomodation.location;
            accomodationEquipments = accomodation.equipments;
            accomodationTags = accomodation.tags;
        }
    });

    if (!accomodationTitle) {
        return <Navigate to="/404"/>;
    }

    return (
        <main className="show_accomodation">
            <div className="show_carousel">
                <Carousel images={accomodationPictures} />
            </div>
            <div className="show_accomodation_details">
                <div className="accomodation_left">
                    <div className="accomodation_title">
                        <h1>{accomodationTitle}</h1>
                        <h2>{accomodationLocation}</h2>
                    </div>
                    <div className="accomodation_tag">
                        <Tag tags={accomodationTags} />
                    </div>
                </div>
                <div className="accomodation_right">
                    <div className="accomodation_owner_container">
                        <div className="accomodation_rating">
                            <Rating rating={accomodationRating} />
                        </div>
                        <div className="accomodation_owner">
                            <span>{accomodationHost.name}</span>
                            <img
                                src={`${accomodationHost.picture}`}
                                alt={`${accomodationHost.name}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="accomodation_collapse">
                <div className="accomodation_description">
                    <Collapse props={accomodationDesc} title={"Description"} />
                </div>
                <div className="accomodation_equipment">
                    <Collapse
                        props={accomodationEquipments}
                        title={"Equipements"}
                    />
                </div>
            </div>
        </main>
    );
}