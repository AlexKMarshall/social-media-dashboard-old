import React from "react";
import BrandLogo from "./brand-logo";
import ValueChange from "./value-change";

const OverviewCard = ({ overview }) => {
  const { type, channel, value, percentChange } = overview;

  return (
    <section className="card overview">
      <header>
        <h3>{type}</h3>
        <BrandLogo brand={channel} />
      </header>
      <div className="content">
        <div className="big-number impact-text">{value}</div>
        <ValueChange change={percentChange} label="%" />
      </div>
    </section>
  );
};

export default OverviewCard;
