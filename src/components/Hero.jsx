import React from 'react';
import { Gamepad2, Code2, Cpu } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="hero-subtitle">2nd Year Computer Science Student</h2>
          <h1 className="hero-title">
            Crafting Digital Worlds through <span className="highlight">Code & Logic</span>
          </h1>
          <p className="hero-description">
            Passionate about Game Development, Virtual Reality, and low-level Graphics.
            I build robust OOP architectures in Unity and develop custom physics constraints using C++ & OpenGL.
          </p>

          <div className="hero-stats">
            <div className="stat-badge glass">
              <Gamepad2 size={20} className="stat-icon" />
              <span>Unity / VR Dev</span>
            </div>
            <div className="stat-badge glass">
              <Code2 size={20} className="stat-icon" />
              <span>Advanced OOP</span>
            </div>
            <div className="stat-badge glass">
              <Cpu size={20} className="stat-icon" />
              <span>OpenGL & Physics</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle circle-1"></div>
          <div className="visual-circle circle-2"></div>
          <div className="glass visual-card">
            <pre><code>
              <span className="syntax-keyword">class</span> <span className="syntax-class">PhysicsEngine</span> {'{'}
              <span className="syntax-keyword">public:</span>
              <span className="syntax-type">void</span> <span className="syntax-function">Step</span>(<span className="syntax-type">float</span> dt) {'{'}
              <span className="syntax-function">IntegrateForces</span>(dt);
              <span className="syntax-function">DetectCollisions</span>();
              <span className="syntax-function">ResolveCollisions</span>();
              {'}'}
              {'}'};
            </code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
