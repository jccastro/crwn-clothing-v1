import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";
import { useState, useEffect } from "react";

const ShopPage = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    setCollections(SHOP_DATA);
  }, []);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

// class ShopPage extends React.Component {
//   constructor() {
//     super();
//     this.state = { collections: SHOP_DATA };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProps }) => {
//           return <CollectionPreview key={id} {...otherCollectionProps} />;
//         })}
//       </div>
//     );
//   }
// }

export default ShopPage;
