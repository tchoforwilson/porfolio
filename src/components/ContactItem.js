import React from "react";
import PropTypes from "prop-types";
import Icon from "./icon";

const ContactItem = ({ title, icon }) => {
  return (
    <div className="contact-item">
      <Icon name={icon} className="contact-item__icon" />
      <p className="contact-item__text">{title}</p>
    </div>
  );
};

ContactItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ContactItem;
