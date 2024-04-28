import React from "react";
import PropTypes from "prop-types";

const Experience = ({ experience }) => {
  return (
    <div className="experience__item">
      <div className="experience__heading">
        <div className="experience__top">
          <h3 className="heading-tertiary">{experience.title}</h3>
          <strong className="experience__year">{experience.active}</strong>
        </div>
        <p>
          {experience.company} / <span>{experience.location}</span>
        </p>
      </div>
      <p className="experience__text">{experience.description}</p>
      <em className="experience__type">{experience.type}</em>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default Experience;
