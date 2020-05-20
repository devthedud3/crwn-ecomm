import React from 'react';
import './preview-item.style.scss';
import { Link } from 'react-router-dom';

const PreviewItem = ({ id, name, imageUrl, price }) => (
  <div className="preview-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <Link className="addCart">ADD TO CART </Link>
    </div>
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);

export default PreviewItem;
