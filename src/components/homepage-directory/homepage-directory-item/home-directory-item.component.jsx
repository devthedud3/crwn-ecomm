import React from "react";

import "./home-directory-item.style.scss";
import { withRouter } from "../../../helper-functions";

const HomeDirectoryItem = ({ name, size, imageUrl, link, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.path}${link}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{name.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(HomeDirectoryItem);
