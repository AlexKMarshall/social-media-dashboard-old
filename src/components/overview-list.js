import React, { useState } from "react";
import OverviewCard from "./overview-card";
import { overviewDataStore } from "./../assets/data/data-store";

const OverviewList = () => {
  const [overviewCollection] = useState(overviewDataStore);

  return (
    <ul className="grid-container">
      {overviewCollection.map((overviewItem) => {
        return (
          <li key={overviewItem.id}>
            <OverviewCard overview={overviewItem} />
          </li>
        );
      })}
    </ul>
  );
};

export default OverviewList;
