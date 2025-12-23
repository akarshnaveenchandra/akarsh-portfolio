import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Tech from './components/Tech.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Impact from './components/Impact.jsx';
import Testimonials from './components/Testimonials.jsx';



export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <section id="home">
          <Hero />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="impact">
          <Impact />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="tech">
          <Tech />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
