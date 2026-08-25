import "./App.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app">
            <Navbar />

            <main>
                <Hero />

                <section className="section-wrapper">
                    <About />
                </section>

                <section className="section-wrapper section-wrapper-accent">
                    <Projects />
                </section>

                <section className="section-wrapper">
                    <Skills />
                </section>

                <section className="section-wrapper section-wrapper-accent">
                    <Contact />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;