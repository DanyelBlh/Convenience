import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function Layout (props){
    return(
        <>
            <Header />
            <Nav />
            <main>{props.children}</main>
            <Footer />
        
        </>
    );
}

export default Layout;