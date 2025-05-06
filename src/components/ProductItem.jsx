import React, { useState } from "react";

const ProductItem = ({
  product_name,
  product_image_src,
  product_rating_star,
  product_rating_count,
  product_new_price,
  product_old_price,
  product_discount,
  is_sale,
}) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 0 ? q - 1 : 0));
  return (
    <>
      <div className="product-sample">
        {is_sale ? <div className="sale-ribbon">Sale</div> : ""}

        <img src={product_image_src} alt="" />
        <h4 className="product-title">{product_name}</h4>
        <div className="product-rating">
          <div className="product-rating-star">
            {Array.from({ length: product_rating_star }, (_, i) => (
              <i key={i} className="bi bi-star-fill" />
            ))}
          </div>
          <div className="product-rating-count">({product_rating_count})</div>
        </div>
        <div className="product-price">
          <span className="product-new-price">
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
            {product_new_price}
          </span>
          <span className="product-old-price">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3281 10.3307C10.3281 10.5075 10.3984 10.6771 10.5234 10.8021C10.6484 10.9272 10.818 10.9974 10.9948 10.9974C11.1716 10.9974 11.3412 10.9272 11.4662 10.8021C11.5912 10.6771 11.6615 10.5075 11.6615 10.3307C11.6615 10.1539 11.5912 9.98435 11.4662 9.85932C11.3412 9.7343 11.1716 9.66406 10.9948 9.66406C10.818 9.66406 10.6484 9.7343 10.5234 9.85932C10.3984 9.98435 10.3281 10.1539 10.3281 10.3307Z"
                stroke="#999999"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66406 4.66536C4.66406 4.31174 4.80454 3.9726 5.05459 3.72256C5.30464 3.47251 5.64377 3.33203 5.9974 3.33203C6.35102 3.33203 6.69016 3.47251 6.9402 3.72256C7.19025 3.9726 7.33073 4.31174 7.33073 4.66536V10.6654C7.33073 11.1958 7.54144 11.7045 7.91652 12.0796C8.29159 12.4547 8.8003 12.6654 9.33073 12.6654C9.86116 12.6654 10.3699 12.4547 10.7449 12.0796C11.12 11.7045 11.3307 11.1958 11.3307 10.6654V10.332M5.33073 7.33203H9.33073"
                stroke="#999999"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {product_old_price}
          </span>
          <span className="product-discount">({product_discount}%)</span>
        </div>
        <div className="product-button">
          <div className="product-quantity">
            <button className="qty-btn" onClick={decrement}>
              −
            </button>
            <span className="qty-display">{quantity}</span>
            <button className="qty-btn" onClick={increment}>
              +
            </button>
          </div>
          <div className="product-cart-button">
            <i className="bi bi-bag" />
            Add
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
