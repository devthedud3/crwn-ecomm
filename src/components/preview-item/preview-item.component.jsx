import React from 'react';
import './preview-item.style.scss';

const PreviewItem = ({ id, name, imageUrl, price }) => (
  <div className="preview-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);

export default PreviewItem;
