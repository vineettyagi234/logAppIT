import React from "react";
import PropTypes from "prop-types";

const TechItem = (tech) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName}
        {tech.lastName}
        <a href="#!" className="secondary-content">
          <i class="material-icons grey-text">Delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
