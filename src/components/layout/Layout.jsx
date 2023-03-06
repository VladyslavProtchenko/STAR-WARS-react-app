import { Outlet } from "react-router-dom"
import { Footer } from "../footer/Index"
import { Header } from "../header/Index"

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export { Layout }