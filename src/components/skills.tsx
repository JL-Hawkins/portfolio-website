import "./skills.css";
import { skillCategories } from "../data/skills";

function Skills() {
    return (
        <section id="skills" className="section">
            <h2>Technical Skills</h2>

            <p className="skills-intro">
               Tools and technologies that I have worked with.
            </p>

            <div className="skills-grid">
                {skillCategories.map((category) => (
                    <article
                        key={category.title}
                        className="skill-category"
                    >
                        <h3 className="skill-category-title">
                            {category.title}
                        </h3>

                        <div className="skill-chip-container">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="skill-chip"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Skills;