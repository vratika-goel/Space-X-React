import React from "react";
import "./Card.scss";

import { CONSTANTS } from "../../Utilities/CONSTANTS";

const Card = (props) => {
  const { cardData } = props;

  return (
    <div className="space-x-card card">
      <picture className="space-x-card_media">
        <source
          media="(min-width: 450px)"
          srcSet={cardData.links.missionPatch}
        />
        <source
          media="(max-width: 450px)"
          srcSet={cardData.links.mission_patch_small}
        />
        <img
          className="space-x-card_media_img"
          src={cardData.links.mission_patch_small}
          alt={CONSTANTS.content.MISSION_PATCH_ALT}
        />
      </picture>
      <div className="space-x-card_content card-body">
        <div className="space-x-card_content_name">
          <p className="space-x-card_content_name_text">
            {cardData.mission_name} {CONSTANTS.content.HASH}{cardData.flight_number}
          </p>
        </div>
        {cardData.mission_id.length > 0 && (
          <div className="space-x-card_content_mission-ids">
            <p className="space-x-card_content_mission-ids_text">
            {CONSTANTS.content.MISSION_IDS}
            </p>
            <ul className="space-x-card_content_mission-ids_list">
              {cardData.mission_id.map((item, index) => {
                return (
                  <li
                    key={item}
                    className="space-x-card_content_mission-ids_list-item"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="space-x-card_content_launch-year">
          <span className="space-x-card_content_launch-year_text">
          {CONSTANTS.content.LAUNCH_YEAR}
          </span>
          <span className="space-x-card_content_launch-year_year">{cardData.launch_year}</span>
        </div>
        <div className="space-x-card_content_successful-launch">
          <span className="space-x-card_content_successful-launch_text">
          {CONSTANTS.content.SUCCESSFUL_LAUNCH}
          </span>
          <span className="space-x-card_content_successful-launch_year">
            {cardData.launch_success.toString()}
          </span>
        </div>
        <div className="space-x-card_content_successful-landing">
          <span className="space-x-card_content_successful-landing_text">
          {CONSTANTS.content.SUCCESSFUL_LAND}
          </span>
          <span className="space-x-card_content_successful-landing_year">
            2006
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
