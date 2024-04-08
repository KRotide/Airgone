import { Carousel } from 'react-bootstrap'
import paintingsDatas from "../../datas/paintings.json"

export default function Gallery() {
    return (
        <section className="gallery container-fluid p-0" id="gallery">
            <h2 className="fw-bold text-center my-md-4 my-2 gallery__title">Galerie</h2>
            <div className="row h-75 m-0 align-items-center">
                <div className="gallery__content p-0">
                    <Carousel
                        interval={null}
                        className="m-4 p-2 gallery__content__carousel"
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
        </section>
    )
}