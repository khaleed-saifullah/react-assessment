import React from "react";
import ProductSidebarFilter from "./ProductSidebarFilter";

const ProductSidebar = () => {
  return (
    <>
      <div className="product-sidebar">
        <ProductSidebarFilter
          heading="CATEGORY"
          filter_item={[
            { item_name: "Sun Care", id: "sun-care" },
            { item_name: "Night Care", id: "night-care" },
            { item_name: "Moisturizers", id: "moisturizers" },
            { item_name: "Eye Care", id: "eye-care" },
            { item_name: "Masks", id: "masks" },
            { item_name: "Personal Care", id: "personal-care" },
            { item_name: "Hair Care", id: "hair-care" },
            { item_name: "On Sale", id: "on-sale" },
          ]}
        />
        <ProductSidebarFilter
          heading="BRAND"
          filter_item={[
            { item_name: "The Body Shop", id: "body-shop" },
            { item_name: "Nivea", id: "nivea" },
            { item_name: "Skinfood", id: "skinfood" },
            { item_name: "Neutrogena", id: "neutrogena" },
            { item_name: "Cerave", id: "cerave" },
            { item_name: "Olay", id: "olay" },
            { item_name: "Dove", id: "dove" },
            { item_name: "Neogen", id: "neogen" },
            { item_name: "Loreal", id: "loreal" },
          ]}
        />
        <ProductSidebarFilter
          heading="COLORS"
          filter_item={[
            { item_name: "Red", id: "red" },
            { item_name: "Pink", id: "pink" },
            { item_name: "White", id: "white" },
            { item_name: "Black", id: "black" },
            { item_name: "Aqua", id: "aqua" },
            { item_name: "Green", id: "green" },
            { item_name: "Blue", id: "blue" },
            { item_name: "Neogen", id: "neogen" },
            { item_name: "Loreal", id: "loreal" },
          ]}
        />
        <div className="product-sidebar-filter">
          <div className="product-sidebar-filter-header">
            <h3>SIZE</h3>
            <i className="bi bi-plus-lg" />
          </div>
          <div className="product-sidebar-filter-option">
            <div className="product-size-filter-option-list">
              <div className="product-size-filter-option product-size-filter-option-active">
                150ml
              </div>
              <div className="product-size-filter-option">200ml</div>
              <div className="product-size-filter-option">250ml</div>
              <div className="product-size-filter-option">300ml</div>
              <div className="product-size-filter-option">350ml</div>
            </div>
          </div>
        </div>
        <div className="product-sidebar-button">
          <a href="#">All Reset</a>
        </div>
      </div>
    </>
  );
};

export default ProductSidebar;
