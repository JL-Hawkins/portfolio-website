import "./contact.css";
import profile from "../data/profile";

function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="contact-content">
                <h2>Contact</h2>

                <p className="contact-text">
                    Thanks for taking the time to view my portfolio. 
                    If you would like to discuss engineering opportunities, or have any questions about my work,
                    I would be happy to hear from you!
                </p>

                <div className="contact-actions">
                    <a
                        href={`mailto:${profile.email}`}
                        className="contact-button"
                    >
                        Email Me
                    </a>

                    <div className="contact-socials">
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                        <span aria-hidden="true">•</span>

                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;