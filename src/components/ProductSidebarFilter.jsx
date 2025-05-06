import React from "react";

const ProductSidebarFilter = ({ heading, filter_item }) => {
  return (
    <>
      <div className="product-sidebar-filter">
        <div className="product-sidebar-filter-header">
          <h3>{heading}</h3>
          <i className="bi bi-plus-lg" />
        </div>
        <div className="product-sidebar-filter-option">
          {filter_item.map((item, index) => {
            return (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id={item.id}
                />
                <label className="form-check-label" htmlFor={item.id}>
                  {item.item_name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductSidebarFilter;
