import React from 'react';
import './preview.style.scss';
import PreviewItem from '../preview-item/preview-item.component.jsx';

const CollectionPreview = ({ title, items }) => (
  <div className="product">
    <h1 className="title">{title}</h1>
    <div className="collection">
      {items
        .filter((items, idx) => idx < 4)
        .map(item => (
          <PreviewItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
