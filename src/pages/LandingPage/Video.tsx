import s from './scss/_video.module.scss'

const Video = () => {
    return (
        <div className={s.video}>
            <div className={s.video__overlay}></div>
            <div className={s.video__container}>
                <div className={s.video__content}>
                    <div className={s.video__content__title}>
                        <h2>EcoModular Building System</h2>
                    </div>
                    <div className={s.video__content__embed}>
                        <iframe
                            src="https://www.youtube.com/embed/Q5OGDZAFUMU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                        <div className={s.video__content__embed__overlay}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video