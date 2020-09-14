import React from "react";

import "./Filter.scss";
import { CONSTANTS } from "../../Utilities/CONSTANTS";
import FilterSection from "../../common-components/FiltersSection/FilterSection";

const Filter = (props) => {

  const { LAUNCH_YEAR_ARR, BOOLEAN_ARR } = CONSTANTS;

  const createFilterObj = (data) => {
    const { filterType, filterValue } = data;
    let filterObj =
      props.filterObj[filterType] === filterValue
        ? { ...props.filterObj, [filterType]: "" }
        : { ...props.filterObj, [filterType]: filterValue };
    props.setFilter(filterObj);
  };

  return (
    <div className="space-x-filter card">
      <div className="space-x-filter_header card-body">
        <h5 className="space-x-filter_header_title card-title font-weight-bold">
          {CONSTANTS.content.FILTERS}
        </h5>
      </div>
      <FilterSection
        filterHeading={CONSTANTS.content.LAUNCH_YEAR_HEADING}
        type={LAUNCH_YEAR_ARR}
        filterType={CONSTANTS.content.LAUNCH_YEAR_ID}
        setFilterObj={createFilterObj}
      />
      <FilterSection
        filterHeading={CONSTANTS.content.SUCCESSFUL_LAND_HEADING}
        type={BOOLEAN_ARR}
        filterType={CONSTANTS.content.SUCCESSFUL_LAUNCH_ID}
        setFilterObj={createFilterObj}
      />
      <FilterSection
        filterHeading={CONSTANTS.content.SUCCESSFUL_LAND_HEADING}
        type={BOOLEAN_ARR}
        filterType={CONSTANTS.content.SUCCESSFUL_LAND_ID}
        setFilterObj={createFilterObj}
      />
    </div>
  );
};

export default Filter;
