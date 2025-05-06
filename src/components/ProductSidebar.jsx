import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import ProductSidebarFilter from "./ProductSidebarFilter";

const ProductSidebar = () => {
  const [value, setValue] = useState([0, 30000]);
  function changePriceVal(changeValue) {
    setValue(changeValue);
  }
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
        <div className="product-sidebar-filter">
          <div className="product-sidebar-filter-header">
            <h3>PRICE</h3>
            <i className="bi bi-plus-lg" />
          </div>
          <div className="product-sidebar-filter-option">
            <RangeSlider
              min={0}
              max={100000}
              step={1}
              value={value}
              onInput={setValue}
            />
            <div className="product-range-price">
              <p>Price</p>
              <div className="product-range-price-list">
                <span>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9219 12.9193C12.9219 13.1403 13.0097 13.3522 13.166 13.5085C13.3222 13.6648 13.5342 13.7526 13.7552 13.7526C13.9762 13.7526 14.1882 13.6648 14.3445 13.5085C14.5007 13.3522 14.5885 13.1403 14.5885 12.9193C14.5885 12.6983 14.5007 12.4863 14.3445 12.33C14.1882 12.1737 13.9762 12.0859 13.7552 12.0859C13.5342 12.0859 13.3222 12.1737 13.166 12.33C13.0097 12.4863 12.9219 12.6983 12.9219 12.9193Z"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.83594 5.83464C5.83594 5.39261 6.01153 4.96868 6.32409 4.65612C6.63665 4.34356 7.06058 4.16797 7.5026 4.16797C7.94463 4.16797 8.36855 4.34356 8.68112 4.65612C8.99368 4.96868 9.16927 5.39261 9.16927 5.83464V13.3346C9.16927 13.9977 9.43266 14.6336 9.9015 15.1024C10.3703 15.5712 11.0062 15.8346 11.6693 15.8346C12.3323 15.8346 12.9682 15.5712 13.437 15.1024C13.9059 14.6336 14.1693 13.9977 14.1693 13.3346V12.918M6.66927 9.16797H11.6693"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {value[0]}
                </span>
                <span>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9219 12.9193C12.9219 13.1403 13.0097 13.3522 13.166 13.5085C13.3222 13.6648 13.5342 13.7526 13.7552 13.7526C13.9762 13.7526 14.1882 13.6648 14.3445 13.5085C14.5007 13.3522 14.5885 13.1403 14.5885 12.9193C14.5885 12.6983 14.5007 12.4863 14.3445 12.33C14.1882 12.1737 13.9762 12.0859 13.7552 12.0859C13.5342 12.0859 13.3222 12.1737 13.166 12.33C13.0097 12.4863 12.9219 12.6983 12.9219 12.9193Z"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.83594 5.83464C5.83594 5.39261 6.01153 4.96868 6.32409 4.65612C6.63665 4.34356 7.06058 4.16797 7.5026 4.16797C7.94463 4.16797 8.36855 4.34356 8.68112 4.65612C8.99368 4.96868 9.16927 5.39261 9.16927 5.83464V13.3346C9.16927 13.9977 9.43266 14.6336 9.9015 15.1024C10.3703 15.5712 11.0062 15.8346 11.6693 15.8346C12.3323 15.8346 12.9682 15.5712 13.437 15.1024C13.9059 14.6336 14.1693 13.9977 14.1693 13.3346V12.918M6.66927 9.16797H11.6693"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {value[1]}
                </span>
              </div>
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
