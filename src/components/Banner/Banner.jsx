import Airgone from "../../assets/images/icons/airgone.webp"
import Frame from "../../assets/images/backgrounds/frame.webp"
import socialNetworksDatas from "../../datas/socialNetworks.json"

export default function Banner() {
    return (
        <>
            <div className="animation">
                <div className="animation__smoke"></div>
            </div>
            <div className="banner">
                <div className="d-flex col-12 justify-content-center align-items-center text-align-center banner__content">
                    <img
                        className="banner__content__frame"
                        src={Frame}
                        alt="Cadre tâche de peinture"
                    />
                    <img
                        className="banner__content__logo"
                        src={Airgone}
                        alt="Logo d'Airgone"
                    />
                </div>
                <div className="container-fluid d-flex justify-content-center banner__socialNetworks">
                    <div className="row">
                        <ul className="list-inline my-0 text-center">
                            {socialNetworksDatas.map((sN) => (
                                <li key={sN.id} className="list-inline-item banner__socialNetworks__li">
                                    <a
                                        className="text-reset text-decoration-none"
                                        href={sN.href}
                                        title={sN.title}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="banner__socialNetworks__li__img"
                                            src={`/icons/${sN.src}`}
                                            alt={sN.alt}
                                            width="90%"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}