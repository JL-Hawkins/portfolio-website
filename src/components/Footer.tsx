import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-name">
                    © {currentYear} Hawkins
                </p>

                <p className="footer-tech">
                    Designed and built by Jennifer Hawkins using React, TypeScript, and Vite.
                </p>
            </div>
        </footer>
    );
}

export default Footer;