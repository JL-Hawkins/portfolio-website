import "./about.css";

function About() {
  return (
    <section id="about" className="section">
      <div className="about-layout">
        <div className="about-content">
          <h2>About</h2>

          <div className="about-bio">
            <p>
              I am a mechanical engineering graduate from Boise State University with a passion for thoughtful,
              functional design and product development. I find satisfaction in combining problem-solving,
              computer-aided design, and manufacturing to create practical solutions that are both useful and
              enjoyable to use. In my free time, I enjoy hiking, fly fishing, and playing video games with friends
              and family.
            </p>

            <p>
              My experience includes CAD modeling in SolidWorks and Fusion 360, 2D drafting using AutoCAD,
              a bit of finite element analysis, and machining with lathes,
              mills, and other shop equipment. I aim to design with both the end user
              and manufacturability in mind, and I have applied these skills to
              projects ranging from bicycle frame optimization to a lever-arm
              lemon muddler for a Boise lemonade business.
            </p>
            
            <p>What I enjoy most about engineering is being able to take an idea and make it real.
              Seeing the thought and work behind a design come to life into something tangible and functional is incredibly rewarding. </p>
          </div>

          <div className="about-details">
            <div className="about-detail">
              <h3>Education</h3>

              <p>
                <span className="about-school">
                  Boise State University
                </span>
                <br />
                B.S. Mechanical Engineering
                <br />
                Mechanical Design Certificate
              </p>
            </div>

            <div className="about-detail">
              <h3>Location</h3>

              <p>
                Calgary, Alberta
                <br />
                <span className="about-secondary">
                  Open to Remote &amp; Hybrid
                </span>
              </p>
            </div>

            <div className="about-detail">
              <h3>Interests</h3>

              <p>
                Product Development
                <br />
                CAD
                <br />
                Manufacturing
              </p>
            </div>
          </div>

          <p className="education-note">
            <strong>Note:</strong> My degree, academic records, and
            some project documentation may be listed under my maiden name,
            <span className="maiden-name"> Jennifer Sennett</span>.
          </p>
        </div>

        <div className="about-photo-container">
          <img
            className="about-photo"
            src={`${import.meta.env.BASE_URL}profile-photo.jpg`}
            alt="Professional portrait of Jennifer Hawkins"
          />
        </div>
      </div>
    </section>
  );
}

export default About;