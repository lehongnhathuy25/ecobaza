import Header from "./Header"
import Container from "./Container"
import Footer from "./Footer"
import Subcribe from '~/Layouts/Components/subcribe'

function DefaultLayout({children}) {
    
    return <>
        <Header/>
        <div className="main ">
            {children}
        </div>
        <Subcribe />
        <Footer/>
    </>
}

export default DefaultLayout;
