import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * @Detail Project component
 * @param {String} imgSrc Project image
 * @param {String} title Title of the project
 * @param {String} description Description of the projects
 * @param {String} to Link to project
 * @param {String} tools Technologies used in the projectss
 * @returns
 */
const Project = ({ imgSrc, title, description, to, tools = [] }) => {
  return (
    <div className="project">
      <img className="project__img" src={imgSrc} alt={title} />
      <div className="project__content">
        <div className="project__details">
          <h3 className="project__title">{title}</h3>
          <Link to={to} className="project__visit">
            Visit
          </Link>
        </div>
        <p className="project__description">{description}</p>
        <div className="project__tools">
          {tools.map((tool, index) => (
            <div key={`${index + tool}`} className="project__tool">
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string,
  tools: PropTypes.array.isRequired,
};

export default Project;
