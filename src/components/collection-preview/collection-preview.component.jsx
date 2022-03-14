import React from "react";
import "./collection-preview.styles.scss";
import { useState, useEffect } from "react";

const CollectionPreview = ({ title, items }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    setFilteredItems(items.filter((_, i) => i < 4));
  }, [items]);

  return (
    <div className="collection-preview">
      <h1 className="title"> {title.toUpperCase()} </h1>
      <div className="preview">
        {filteredItems.map(({ id, name }) => {
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
