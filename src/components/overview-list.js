import React, { useState } from "react";
import OverviewCard from "./overview-card";

const overviewDataStore = [
  {
    id: 1,
    type: "Page Views",
    channel: "facebook",
    value: 87,
    percentChange: 3,
  },
  { id: 2, type: "Likes", channel: "facebook", value: 52, percentChange: -2 },
];

const OverviewList = () => {
  const [overviewCollection] = useState(overviewDataStore);

  return (
    <ul>
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
