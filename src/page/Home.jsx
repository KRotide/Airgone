import Header from "../components/Header/Header"
import Slides from "../components/Slides/Slides"
import Gallery from "../components/Gallery/Gallery"
import Story from "../components/Story/Story"
import Contact from "../components/Contact/Contact"

export default function Home() {
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
        </>
    )
}