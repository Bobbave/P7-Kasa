import React from "react";
import Properties from "../data/accomodations";
import Card from "../components/Card";
import Banner from "../components/Banner";
import BannerHome from "../assets/banner_home.png"


export default function Home() {
    document.title = "Kasa - Home";
    return (
        <main className="show_home">
            <Banner img={BannerHome} text1={'Chez vous,'} text2={'partout et ailleurs'} />
            <div className="show_card">
                {Properties.map((accomodation) => (
                    <Card key={accomodation.id} property={accomodation} />
                ))}
            </div>
        </main>
    );
}