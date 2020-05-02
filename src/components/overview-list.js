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
  {
    id: 3,
    type: "Likes",
    channel: "instagram",
    value: 5462,
    percentChange: 2257,
  },
  {
    id: 4,
    type: "Profile Views",
    channel: "instagram",
    value: 52396,
    percentChange: 1375,
  },
  {
    id: 5,
    type: "Retweets",
    channel: "twitter",
    value: 117,
    percentChange: 303,
  },
  { id: 6, type: "Likes", channel: "twitter", value: 507, percentChange: 553 },
  { id: 7, type: "Likes", channel: "youtube", value: 107, percentChange: -19 },
  {
    id: 8,
    type: "Total Views",
    channel: "youtube",
    value: 1407,
    percentChange: -12,
  },
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
