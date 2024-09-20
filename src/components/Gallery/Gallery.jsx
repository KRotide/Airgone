import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import paintingsDatas from "../../datas/paintings.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

export default function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [selectedPainting, setSelectedPainting] = useState(null);

    const handleShowModal = (painting) => {
        if (painting.url && painting.url.length > 0) {
            setSelectedPainting(painting);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPainting(null);
    };

    return (
        <section className="gallery" id="gallery">
            <h2 className="fw-bold text-center my-md-4 my-2 gallery__title">Galerie</h2>
            <div className="gallery__content">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="gallery__content__mySwiper"
                >
                    {paintingsDatas.map((painting, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={`/assets/paintings/${painting.mainUrl}`}
                                alt={painting.alt}
                                title={painting.url && painting.url.length > 0 ? "Cliquez sans glisser pour agrandir" : ""}
                                onClick={() => handleShowModal(painting)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {selectedPainting && (
                <Modal show={showModal} onHide={handleCloseModal} className="gallery__content__modal">
                    <Modal.Body>
                        <button type='button' className='modal__btn' onClick={handleCloseModal}>&times;</button>
                        <Swiper
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="gallery__content__modal__mySwiper"
                        >
                            {selectedPainting.url.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={`/assets/paintings/${image}`}
                                        alt={selectedPainting.alt}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Modal.Body>
                </Modal>
            )}
        </section>
    )
}