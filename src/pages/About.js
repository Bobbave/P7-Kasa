import React from "react";
import DataAbout from "../data/about";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import BannerAbout from "../assets/banner_about.png";

export default function About() {
    document.title = "Kasa - About us";
    return (
        <main className="show_about">
            <Banner img={BannerAbout} />
            <div className="show_collapses">
                {DataAbout.map((props,index) => (
                    <div className="collapses" key={index}>
                        <Collapse
                            key={index}
                            title={DataAbout[index].title}
                            props={DataAbout[index].text}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}