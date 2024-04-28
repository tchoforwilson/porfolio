import React from "react";
import PropTypes from "prop-types";
import sprite from "../assets/icons/icomoon/sprite.svg";

const Icon = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={`${sprite}#icon-${name}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
