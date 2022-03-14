import React from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title"> {title.toUpperCase()} </h1>
      <div className="preview">
        {items
          .filter((_, i) => i < 4)
          .map(({ id, name }) => {
            return (
              <div className="item" key={id}>
                {name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
