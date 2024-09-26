import React, { Suspense, useEffect, useState } from "react"
import Loader from "../components/Loader/Loader"
const Header = React.lazy(() => import("../components/Header/Header"))
const Slides = React.lazy(() => import("../components/Slides/Slides"))
const Gallery = React.lazy(() => import("../components/Gallery/Gallery"))
const Story = React.lazy(() => import("../components/Story/Story"))
const Contact = React.lazy(() => import("../components/Contact/Contact"))
const Footer = React.lazy(() => import("../components/Footer/Footer"))

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
            <Suspense fallback={<Loader />}>
                <Header />
                <main>
                    <Slides />
                    <Gallery />
                    <Story />
                    <section className="background"></section>
                    <Contact />
                </main>
                <Footer />
            </Suspense>
        )
    }
}