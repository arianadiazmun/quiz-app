import Footer from "./Footer/Footer";
//import Nav from "./Nav/Nav";

export default function AppLayout ({children}) {
    return (
        <div id="main-container">
    
        {children}
        <Footer/>
        </div>
    )
}