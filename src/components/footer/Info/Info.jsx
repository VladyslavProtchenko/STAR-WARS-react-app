import style from './Info.module.css'

const Info = () => {
    return (
        <article className={style.box}>
            <h1 className={style.title}>Star-Wars</h1>
            <p className={style.text}>
                This cite is fake. About star-wars films. but also here
                is so much porn
            </p>
        </article>
    );
}
export {Info};