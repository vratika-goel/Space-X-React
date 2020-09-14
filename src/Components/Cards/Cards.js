import React from "react";

import Card from "../Card/Card";
import "./Cards.scss";

const Cards = (props) => {
  const { data } = props;

  return (
    <div className="space-x-cards row">
      {data.map((item, index) => {
        return (
          <div
            key={item.flight_number}
            className="col-md-3 space-x-cards_details"
          >
            <Card cardData={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
