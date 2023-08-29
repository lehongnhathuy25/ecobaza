import Header from "./Header"
import Container from "./Container"
import Footer from "./Footer"



function DefaultLayout({children}) {
    return <>
        <Header/>
        <Container>
            {children}
        </Container>
        <Footer/>
    </>;
}

export default DefaultLayout;
