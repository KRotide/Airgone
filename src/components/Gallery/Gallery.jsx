import { Carousel } from 'react-bootstrap'
import paintingsDatas from "../../datas/paintings.json"

export default function Gallery() {
    return (
        <section className="gallery" id="gallery">
            <div className="container-fluid">
                <h2 className="fw-bold text-center my-md-4 my-2 gallery__title">Galerie</h2>
                <div className="row">
                    <div className="col m-4 p-0 gallery__content">
                        <Carousel
                            className="p-2 gallery__content__carousel"
                        >
                            {paintingsDatas.map((painting, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="gallery__content__carousel__img"
                                        src={`/assets/paintings/${painting.mainUrl}`}
                                        alt={painting.alt}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}