import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Form, Button, Toast } from 'react-bootstrap'

export default function Contact() {
    const form = useRef()
    const [successToast, setSuccessToast] = useState(false)
    const [errorToast, setErrorToast] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm("service_00ctv8j", "template_ufg7bjw", form.current, "s2sRzBxtaodst2gY1").then(
            (result) => {
                setSuccessToast(true)
            },
            (error) => {
                setErrorToast(true)
            }
        )
    }

    return (
        <section className="contact" id="contact">
            <div className="container-fluid p-0">
                <h2 className="fw-bold text-center my-md-4 my-2">Contact</h2>
                <div className="row justify-content-center">
                    <div className="col-9 col-md-6 m-4 p-4 contact__content">
                        <Form className="contact__content__form" ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-4" controlId="formBasicName">
                                <Form.Label className="contact__content__form__label">Nom</Form.Label>
                                <Form.Control className="contact__content__form__input" type="text" name="name" required autoComplete="name" placeholder="Qui êtes-vous ?" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label className="contact__content__form__label">Email</Form.Label>
                                <Form.Control className="contact__content__form__input" type="email" name="email" required autoComplete="email" placeholder="Quelle est votre adresse Mail ?" />
                                <Form.Text className="text-muted">
                                    Votre email ne sera jamais partagé.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="floatingTextarea">
                                <Form.Label className="contact__content__form__label">Message</Form.Label>
                                <Form.Control className="contact__content__form__input" as="textarea" name="message" required placeholder="Tapez ici votre message" />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button className="contact__content__form__button" variant="primary" type="submit">
                                    ENVOYER
                                </Button>
                            </div>
                        </Form>
                        <Toast className="contact__content__toast" show={successToast} onClose={() => setSuccessToast(false)} bg="secondary">
                            <Toast.Header className="contact__content__toast__header">
                                <strong className="mr-auto">Message envoyé</strong>
                            </Toast.Header>
                            <Toast.Body>Votre message a été envoyé avec succès.</Toast.Body>
                        </Toast>
                        <Toast className="contact__content__toast" show={errorToast} onClose={() => setErrorToast(false)} bg="danger">
                            <Toast.Header className="contact__content__toast__header">
                                <strong className="mr-auto">Erreur d'envoi</strong>
                            </Toast.Header>
                            <Toast.Body>Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.</Toast.Body>
                        </Toast>
                    </div>
                </div>
            </div>
        </section>
    )
}