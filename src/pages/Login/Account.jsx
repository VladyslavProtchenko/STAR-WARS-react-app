import { Link } from "react-router-dom"

export function Account(){

    return (
        <main className={box}>
            <h1 className={title}>Success !!!</h1>
            <p>Welcome to this fucking star wars cite</p>
            <Link to='/movie' className={link}>Go to cinema</Link>
        </main>
    )
}

const box = 'flex flex-col justify-center items-center'
const title = 'font-bold text-5xl mb-4'

const link = 'mt-3 font-bold uppercase text-red-500 hover:underline'

