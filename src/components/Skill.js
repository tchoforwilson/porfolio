import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {String} title Title of the skill
 * @param {Number} width Width of the skill
 * @returns
 */
const Skill = ({ title, width }) => {
  return (
    <div className="skill-item">
      <h4 className="skill-item__title">{title}</h4>
      <div className="skill-item__container">
        <div
          className="skill-item__content"
          style={{ width: width + "%" }}
        ></div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Skill;
