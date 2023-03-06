import { Info } from "./Info/Info";
import { Nav } from "./Nav/Nav";
import {Social} from "./Social/Social";

const Footer = () => {
    
    return (
        <footer className={footer}>
            <section className={box}>
                <Info/>
                <Nav/>
                <Social/>
            </section>
        </footer>
    );
};

export { Footer };

const footer = "flex bg-slate-800 w-screen justify-center w-screen py-2";
const box ="max-w-6xl flex w-full";