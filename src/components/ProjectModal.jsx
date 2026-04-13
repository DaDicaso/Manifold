import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Play } from 'lucide-react';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <h2>{project.title}</h2>
          <div className="modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-media">
            {project.videoUrl ? (
              <div className="video-placeholder">
                <Play size={48} className="play-icon" />
                <p>Video Demo Available Soon</p>
              </div>
            ) : (
              <img src={project.thumbnail} alt={project.title} className="modal-img" />
            )}
          </div>

          <div className="modal-details">
            <h3>Overview</h3>
            <p>{project.description}</p>

            <div className="modal-actions">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={18} /> View Build
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Github size={18} /> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
