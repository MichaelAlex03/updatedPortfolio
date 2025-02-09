import Header from './components/Header'
import Landing from './components/Home/Landing'
import About from './components/Home/About'
import Projects from './components/Home/Projects'
import Contact from './components/Home/Contact'

const Home = () => {

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div >
                <Landing />

                <div id='content'>

                    <Header scrollToSection={scrollToSection} />

                    <section id='about'>
                        <About />
                    </section>

                    <section id='projects'>
                        <Projects />
                    </section>

                    <section id='contact'>
                        <Contact />
                    </section>

                </div>
            </div>
        </>
    )
}

export default Home