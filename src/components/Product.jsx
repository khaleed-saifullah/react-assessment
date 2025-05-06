import React from "react";
import ProductSidebar from "./ProductSidebar";
import ProductLists from "./ProductLists";

const Product = () => {
  return (
    <>
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ProductSidebar />
            </div>
            <div className="col-md-9">
              <ProductLists />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
