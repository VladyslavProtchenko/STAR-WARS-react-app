import { Card } from "./Card/Card";

const Comments = () => {
    return (
        <article className={box}>
            <h2 className={title}>Comments</h2>

            <nav className={comments}>

                <div className={prev}></div>
                <Card/>
                <div className={next}></div>

            </nav>        
        </article>
    );
}
export {Comments};


const box = 'flex bg-slate-100 py-40 flex-col min-h-[500px]'
const title = "font-bold mb-6 text-3xl"
const comments = 'flex justify-around items-center'
const prev = "border-t-[3px] border-l-[3px] w-5 h-5 border-black -rotate-45"
const next = "border-t-[3px] border-r-[3px] w-5 h-5 border-black rotate-45"