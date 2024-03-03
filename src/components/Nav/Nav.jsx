export default function Nav() {
    return (
        <nav className="nav navbar navbar-expand-md fixed-top py-0">
            <div className="container-fluid mx-sm-5 py-0">
                <a className="nav__brand navbar-brand py-0" href="#top">
                    <h1 className="fw-bold">Airgone</h1>
                </a>
                <button className="nav__btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a href="#top" className="nav__link nav-link">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a href="#slides" className="nav__link nav-link">Diapo</a>
                        </li>
                        <li className="nav-item">
                            <a href="#gallery" className="nav__link nav-link">Galerie</a>
                        </li>
                        <li className="nav-item">
                            <a href="#story" className="nav__link nav-link">Histoire</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav__link nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}