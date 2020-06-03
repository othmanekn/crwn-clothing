import React from "react";
import "./preview-collection.scss";
import CollectionItem from "../collection-item/collection-item";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map((item) => (
          <CollectionItem
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
