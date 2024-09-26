import React, { useState } from "react"
import { Button, Modal, ListGroup } from 'react-bootstrap'
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from 'react-share'
import Airgone from "../../assets/images/icons/airgone.webp"
import LinkIcon from "../../assets/images/icons/link-45deg.svg"
import socialNetworksDatas from "../../datas/socialNetworks.json"

export default function Footer() {
    const [showModal, setShowModal] = useState(false)

    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)

    const url = 'https://airgone.netlify.app/'

    return (
        <footer className="footer navbar navbar-expand-md py-0">
            <div className="container-fluid mx-sm-5 py-0">
                <div className="row m-0 w-100 align-items-center">
                    <div className="col-12 col-md-4 p-0">
                        <Button
                            variant="none"
                            onClick={handleShowModal}
                            className="navbar-brand py-0"
                        >
                            <img
                                className="footer__brand my-2"
                                src={Airgone}
                                alt="Logo d'Airgone"
                                title="Cliquez pour partager ce site"
                            />
                        </Button>
                        <Modal
                            className="footer__brand__modal"
                            show={showModal}
                            onHide={handleCloseModal}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Et si on était dans le partage ?
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <EmailShareButton
                                    url={url}
                                >
                                    <img
                                        src='/icons/mail.webp'
                                        alt="Email logo"
                                        title="Cliquez pour partager ce site via vos mails"
                                    />
                                </EmailShareButton>
                                <FacebookShareButton
                                    url={url}
                                >
                                    <img
                                        src='/icons/facebook.webp'
                                        alt="Facebook logo"
                                        title="Cliquez pour partager ce site sur facebook"
                                    />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={url}
                                >
                                    <img
                                        src='/icons/x.webp'
                                        alt="X logo"
                                        title="Cliquez pour partager ce site sur X"
                                    />
                                </TwitterShareButton>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div className="col-12 col-md-4 p-0 text-md-center">
                        <ListGroup as="ul" className="list-unstyled mb-0">
                            <ListGroup.Item as="li" className="footer__li p-0">
                                <p className="footer__li__txt mx-0 my-2">
                                    Airgone Artiste Peintre | &copy; 2024 - Site développé par
                                    <a
                                        href="https://portfolio-caroline-ruiz.netlify.app/"
                                        title="Lien vers le portfolio de Caroline Ruiz"
                                        className="text-reset text-decoration-none"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        &nbsp;Caroline Ruiz&nbsp;
                                        <img
                                            src={LinkIcon}
                                            alt="Icône de lien"
                                        />
                                    </a>
                                </p>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-12 col-md-4 p-0 text-md-end">
                        <ListGroup horizontal as="ul" className="list-inline mb-0 justify-content-end">
                            {socialNetworksDatas.map((sN) => (
                                <ListGroup.Item as="li" key={sN.id} className="list-inline-item m-0 p-0 footer__li">
                                    <a
                                        href={sN.href}
                                        title={sN.title}
                                        className="text-reset text-decoration-none"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="footer__li__img my-2"
                                            src={`/icons/${sN.src}`}
                                            alt={sN.alt}
                                            width="60%"
                                        />
                                    </a>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </div>
            </div>
        </footer>
    )
}