import Airgone from "../../assets/images/icons/airgoneloader.webp"

export default function Loader() {
    return (
        <div className="loader">
            <div className="loader__content">
                <img
                    className="loader__content__logo"
                    src={Airgone}
                    alt="Logo d'Airgone"
                />
            </div>
        </div>
    )
}
