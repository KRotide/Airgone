import StoryFrame from "../../assets/images/backgrounds/storyFrame.png"

export default function Story() {
    return (
        <section className="story" id="story">
            <div className="container-fluid p-0">
                <h2 className="fw-bold text-center my-md-4 my-2">Histoire</h2>
                <div className="row m-0">
                    <div className="col-12 p-0 position-relative d-flex align-items-center justify-content-center">
                        <img
                            className="story__frame"
                            src={StoryFrame}
                            alt="Cadre tâche de peinture"
                        />
                        <p className="m-0 p-1 position-absolute story__text">
                            <span className="story__text__span">&laquo; Tout est énergie &raquo;</span><br />
                            Né à Lyon, Nicolas Godeau alias AIRGONE se réalise artistiquement à travers l'abstraction lyrique.<br /><br />
                            Il s'exprime grâce à une technique intuitive et spontanée, comme une écriture automatique. Il trouve son inspiration dans l'interprétation des énergies qui nous font et nous entourent.<br /><br />
                            <span className="story__text__span">Il faut que ça vibre et qu'il y ait du mouvement !</span><br />
                            Ses compositions abstraites sont essentiellement réalisées à l'encre acrylique, à l'aérographe et aux bombes aérosols.<br /><br />
                            Passionné par l'art depuis toujours, c'est après avoir vécu de nombreuses expériences créatives qu'il décide de vivre de sa passion et de se consacrer entièrement à son art.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}