import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card glass" onClick={() => onClick(project)}>
      <div className="card-image-wrapper">
        <img src={project.thumbnail} alt={project.title} className="card-image" />
        <div className="card-overlay">
          <span className="expand-text">View Details <ArrowUpRight size={16} /></span>
        </div>
      </div>

      <div className="card-content">
        <div className="card-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-short-desc">{project.shortDesc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
