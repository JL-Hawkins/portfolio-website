import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;