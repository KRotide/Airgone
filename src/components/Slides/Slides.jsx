import React, { useState } from 'react'
import { Carousel } from "react-bootstrap";

import DecoLeft from "../../assets/images/backgrounds/decoration.webp"
import DecoRight from "../../assets/images/backgrounds/decoration1.webp"

import video from "../../assets/images/slides/video.mp4"
import video1 from "../../assets/images/slides/video1.mp4"

export default function Slides() {
    const [currentVideo, setCurrentVideo] = useState(null);

    const videos = [{ src: video }, { src: video1 }];

    const handleVideoPlay = (index) => {
        if (currentVideo !== null && currentVideo !== index) {
            const currentVideoElement = document.getElementById(`video-${currentVideo}`);
            if (currentVideoElement) {
                currentVideoElement.pause();
            }
        }
        setCurrentVideo(index);
    }

    return (
        <section className="slides" id="slides">
            <div className="slides__deco">
                <img src={DecoLeft} alt="left abstract decoration" />
                <img src={DecoRight} alt="right abstract decoration" />
            </div>
            <div className="container-fluid p-0">
                <div className="row m-0 align-items-center justify-content-center">
                    <div className="col-4 p-0">
                        <h2 className="fw-bold text-center my-md-4 my-2">Diapo</h2>
                        <div className="row justify-content-center">
                            <Carousel
                                className="slides__carousel my-4"
                                onClick={() => handleVideoPlay(null)}
                            >
                                {videos.map((video, index) => (
                                    <Carousel.Item key={index}>
                                        <video
                                            controls
                                            id={`video-${index}`}
                                            onPlay={() => handleVideoPlay(index)}
                                        >
                                            <source src={video.src} type="video/mp4" />
                                            Votre navigateur ne prend pas en charge la balise video.
                                        </video>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}