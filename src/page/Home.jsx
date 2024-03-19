import Header from "../components/Header/Header"
import Slides from "../components/Slides/Slides"
import Gallery from "../components/Gallery/Gallery"
import Story from "../components/Story/Story"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

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
            <Footer />
        </>
    )
}