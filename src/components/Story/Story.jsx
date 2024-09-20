import StoryFrame from "../../assets/images/backgrounds/storyFrame.png"

export default function Story() {
    return (
        <section className="story" id="story">
            <div className="container-fluid p-0">
                <h2 className="fw-bold text-center my-md-4 my-2">Histoire</h2>
                <div className="d-flex align-items-center justify-content-center story__content">
                    <img
                        className="story__content__frame"
                        src={StoryFrame}
                        alt="Cadre tâche de peinture"
                    />
                    <div className="story__content__bio">
                        <div className="p-1 position-absolute story__content__bio__text">
                            <h3 className="story__content__bio__text__title">&laquo; Tout est énergie &raquo;</h3><br />
                            Né à Lyon, Nicolas Godeau alias AIRGONE se réalise artistiquement à travers l'abstraction lyrique.<br /><br />
                            Il s'exprime grâce à une technique intuitive et spontanée, comme une écriture automatique. Il trouve son inspiration dans l'interprétation des énergies qui nous font et nous entourent.<br /><br />
                            <h3 className="story__content__bio__text__title">Il faut que ça vibre et qu'il y ait du mouvement !</h3><br />
                            Ses compositions abstraites sont essentiellement réalisées à l'encre acrylique, à l'aérographe et aux bombes aérosols.<br /><br />
                            Passionné par l'art depuis toujours, c'est après avoir vécu de nombreuses expériences créatives qu'il décide de vivre de sa passion et de se consacrer entièrement à son art.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}