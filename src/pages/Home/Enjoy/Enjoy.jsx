import { Link } from "react-router-dom";

const Enjoy = () => {
    return (
        <article className={box}>
                <div className={content} >
                    <h2 className={title}>Enjoy the fucking Star Wars</h2>
                    <p className={text}>If you are not pars of the Star Wars idiot around the world than take your fucking ass in your fucking hands ang go watch this shit bitch!</p>
                    <Link to='/login' className={link}>join</Link>
                </div>

            </article>
    );
}

export  {Enjoy};

const box = "flex justify-end bg-[url('https://images.unsplash.com/photo-1635267249830-f20f0f7f92fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80')] min-h-[600px] bg-cover"
const content = 'flex flex-col justify-center bg-slate-900 w-1/2 bg-opacity-70 px-10 text-left'
const title = 'font-bold text-5xl text-slate-200 mb-3'
const text = 'text-slate-300 mb-5'
const link = 'self-end text-pink-600 font-bold text-2xl uppercase'
