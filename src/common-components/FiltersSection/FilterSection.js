import React from "react";
import PropTypes from "prop-types";
import "./FilterSection.scss";

import {setActiveStyles} from "../../Utilities/helpers";

const FilterSection = (props) => {
  const { filterHeading, type, filterType } = props;

  const applyFilter = (event) => {
    const filterType = event.target.parentElement.getAttribute("id");
    const filterValue = event.target.getAttribute("id");
    setActiveStyles(event.target, event.target.parentElement);
    props.setFilterObj({ filterType, filterValue });
  };

  return (
    <div className="space-x-filter_body card-body">
      <section id={filterType} className="space-x-filter_body_launch-year">
        <p className="space-x-filter_body_launch-year_filter-text text-center">
          {filterHeading}
        </p>
        {type.map((item, index) => {
          return (
            <button
              id={item}
              key={`key_${item}`}
              type="button"
              onClick={applyFilter}
              className="btn btn-success space-x-filter_body_launch-year_btn-text"
            >
              {item}
            </button>
          );
        })}
      </section>
    </div>
  );
};

FilterSection.propTypes = {
  type: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string)]),
  customClass: PropTypes.string,
};

FilterSection.defaultProps = {
  type: [],
  customClass: "",
};

export default FilterSection;
