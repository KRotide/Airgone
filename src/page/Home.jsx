import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader"
import Header from "../components/Header/Header"
import Slides from "../components/Slides/Slides"
import Gallery from "../components/Gallery/Gallery"
import Story from "../components/Story/Story"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [minLoadingTime, setMinLoadingTime] = useState(false);

    useEffect(() => {
        const minTime = setTimeout(() => {
            setMinLoadingTime(true)
        }, 5000);

        const handleLoad = () => {
            setLoading(false);
        }
        window.addEventListener('load', handleLoad);
        return () => {
            clearTimeout(minTime)
            window.removeEventListener('load', handleLoad);
        }
    }, []);

    if (loading || !minLoadingTime) {
        return <Loader />;
    } else {
        return (
            <>
                <Header />
                <main>
                    <Slides />
                    <Gallery />
                    <Story />
                    <section className="background"></section>
                    <Contact />
                </main>
                <Footer />
            </>
        )
    }
}