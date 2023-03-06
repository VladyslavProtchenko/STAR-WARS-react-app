import { Login } from './Login/Login';
import { Logo } from './Logo/Logo';
import { Menu } from './Menu/Menu';

const Header = () => {

    return (
        <header className={header}>
                <ul className={nav}>
                    <Logo/>
                    <Menu/>
                    <Login/>
                </ul>
        </header>
    );
};

export { Header };

const header = "flex fixed w-screen top-0 left-0 justify-center bg-white bg-opacity-80"
const nav = "flex max-w-6xl w-full justify-between"