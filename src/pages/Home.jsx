import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import Services from "../components/Services"
import Footer from "../components/Footer"

function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <About />
            <Services />
            <Contact />
          <Footer />
        </>
    )
}

export default Home
