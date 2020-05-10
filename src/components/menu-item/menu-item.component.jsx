import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = ({ name, size, imageUrl, link, history, match }) => (
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

export default withRouter(MenuItem);
