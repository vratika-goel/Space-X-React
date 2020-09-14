import React, { useState, useEffect } from "react";

import "./App.scss";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";

import { CONSTANTS } from "../../Utilities/CONSTANTS";
import { fetchAllMissions } from "../../Utilities/services";
import {
  getParams,
  modifyURL,
  setUpdatedQueryUrlInBrowser,
} from "../../Utilities/helpers";

let filterObj = {
  launch_year: "",
  launch_success: "",
  land_success: "",
};

const App = (props) => {
  const [page, setPage] = useState(1);
  const [missionData, setMissionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatedUrl, setUpdatedUrl] = useState();

  useEffect(() => {
    setIsLoading(true);
    let existingParams = getParams(window.location.href);
    existingParams
      ? setUpdatedUrl(modifyURL(existingParams))
      : setUpdatedUrl(modifyURL());
    if (updatedUrl) {
      fetchAllMissions(updatedUrl)
        .then((data) => {
          setIsLoading(false);
          setMissionData(data);
        })
        .catch((error) => {});
    }
  }, [page, updatedUrl]);

  const getFilterObj = (filterData) => {
    filterObj = { ...filterData };
    setUpdatedQueryUrlInBrowser(filterData);
    setUpdatedUrl(modifyURL(filterData));
  };

  return (
    <div className="container space-x-container">
      <header className="row space-x-container_header">
        <h3>{CONSTANTS.content.SPACEX_LAUNCH_PROGRAMS}</h3>
      </header>
      <div className="row space-x-container_wrapper">
        <aside className="col-lg-2 col-md-2 col-sm-12 space-x-container_wrapper_filters">
          <Filter setFilter={getFilterObj} filterObj={filterObj} />
        </aside>
        {isLoading ? (
          <div className="col-lg-10 col-md-10 col-sm-12 row space-x-container_wrapper_loading">
            {CONSTANTS.content.LOADING}
          </div>
        ) : null}
        {missionData && missionData.length ? (
          <div className="col-lg-10 col-md-10 col-sm-12 row space-x-container_wrapper_cards">
            <Cards data={missionData} />
          </div>
        ) : (
          <div className="col-lg-10 col-md-10 col-sm-12 row space-x-container_wrapper_no-data">
            {CONSTANTS.content.NO_DATA_AVAILABLE}
          </div>
        )}
      </div>
      <footer className="row space-x-container_footer">
        <p>{CONSTANTS.content.COPYRIGHT}</p>
      </footer>
    </div>
  );
};

export default App;
