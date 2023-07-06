import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

export default function AppLayout ({children}) {
    return (
        <>
        <Nav/>
        {children}
        <Footer/>
        </>
    )
}