import React from 'react';
import './AboutSection.css';

function AboutSection() {
  const skills = [
    { category: "Languages", items: ["C++", "C#", "Java", "Python", "JavaScript"] },
    { category: "Game Dev", items: ["Unity", "VR/AR", "Gameplay Programming", "Physics"] },
    { category: "Graphics", items: ["OpenGL", "GLSL", "Shaders", "Rendering Pipelines"] },
    { category: "Core CS", items: ["Data Structures", "Algorithms", "OOP", "System Design"] }
  ];

  return (
    <section id="about" className="section about-section glass">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a 2nd year Computer Science student with a deep fascination for the math and logic behind interactive experiences.
              My primary focus is <strong>Game Development</strong>, particularly building immersive VR applications in Unity.
            </p>
            <p>
              Beyond high-level engines, I love diving into the low-level architecture of graphics and systems.
              I have experience building custom physics engines and rendering pipelines using <strong>C++ and OpenGL</strong>.
              Strong fundamentals in <strong>Object-Oriented Programming (OOP)</strong> and logic building allow me to architect scalable and performant codebases.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-card">
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
