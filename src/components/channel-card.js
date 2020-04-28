import React from "react";

const ChannelCard = ({ id }) => {
  return (
    <section>
      <header>
        <div>Channel Logo</div>
        <div>username</div>
      </header>
      <div>1234</div>
      <div>followers</div>
      I'm a card for network number {id}
      <footer>
        <div>direction icon</div>
        <div>follower delta</div>
        Today
      </footer>
    </section>
  );
};

export default ChannelCard;
