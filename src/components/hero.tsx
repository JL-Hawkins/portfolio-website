import "./hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-label">Engineering Portfolio</p>

        <h1>Jennifer Hawkins</h1>

        <h2>B.S. Mechanical Engineering</h2>

        <p>
          Dedicated to thoughtful design, practical problem solving, and
          developing ideas from concept to real world solutions.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;