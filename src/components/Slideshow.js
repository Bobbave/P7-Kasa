import React, {useEffect, useState} from "react";

const width = 100;

const Slideshow = ({images}) => {
    const chevronLeft = <i className="fa-solid fa-chevron-left"></i>;
    const chevronRight = <i className="fa-solid fa-chevron-right"></i>;
    const slideTime = 3000;

    const displayPictures = images.map((image, index) => {
        return (
            <div className="slide" key={index} id={`carouselitem${index}`}>
                <img src={image} alt="Intérieur du logement" />
            </div>
        );
    });

    const [sliderPosition, setSliderPosition] = useState(0);

    const translateSlides = (position) => {
        let toTranslate = -width * position;
        for (let i = 0; i < images.length; i++) {
            document.getElementById(
                `carouselitem${i}`
            ).style.transform = `translateX(${toTranslate}%)`;
        }
    };

    const nextSlide = () => {
        let position = sliderPosition;
        if (position < images.length - 1) {
            position = position + 1;
        } else if (position === images.length - 1) {
            position = 0;
        }
        translateSlides(position);
        setSliderPosition(position);
    }; 

    const previousSlide = () => {
        let position = sliderPosition;
        if (position > 0) {
            position = position - 1;
        } else if (position === 0) {
            position = images.length - 1;
        }
        translateSlides(position);
        setSliderPosition(position);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, slideTime);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sliderPosition]);

    if (images.length > 1) {
        return (
            <div className="show_slideshow">
                <div className="chevronLeft" onClick={previousSlide}>
                    {chevronLeft}
                </div>
                <div className="counter">
                    <p>
                        {sliderPosition + 1} / {images.length}
                    </p>
                </div>
                <div className="chevronRight" onClick={nextSlide}>
                    {chevronRight}
                </div>
                <div className="show_frame">{displayPictures}</div>
            </div>
        );
    } else {
        return (
            <div className="show_slideshow">
                <div className="show_frame">{displayPictures}</div>
            </div>
        );
    }
};

export default Slideshow;