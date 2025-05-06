import React from "react";
import ProductItem from "./ProductItem";

const ProductLists = () => {
  return (
    <>
      <div className="product-list-filter">
        <div className="input-group">
          <span className="input-group-text" id="visible-addon">
            Sort By
          </span>
          <select className="form-select" aria-label="Default select example">
            <option selected="">Latest</option>
            <option value={1}>Low to high price</option>
            <option value={2}>High to low price</option>
          </select>
        </div>
      </div>
      <div className="product-lists">
        <div className="row">
          <div className="col-md-4">
            <ProductItem
              product_name="Nivea Soft Jar Moisturising Cream"
              product_image_src="/src/assets/images/product-one.png"
              product_rating_star={5}
              product_rating_count={16}
              product_new_price={1250.0}
              product_old_price={1250.0}
              product_discount={-45}
              is_sale={true}
            />
          </div>
          <div className="col-md-4">
            <ProductItem
              product_name="Nivea Soft Jar Moisturising Cream"
              product_image_src="/src/assets/images/product-two.png"
              product_rating_star={5}
              product_rating_count={16}
              product_new_price={1250.0}
              product_old_price={1250.0}
              product_discount={-45}
              is_sale={true}
            />
          </div>
          <div className="col-md-4">
            <ProductItem
              product_name="Nivea Soft Jar Moisturising Cream"
              product_image_src="/src/assets/images/product-three.png"
              product_rating_star={5}
              product_rating_count={16}
              product_new_price={1250.0}
              product_old_price={1250.0}
              product_discount={-45}
            />
          </div>
          <div className="col-md-4">
            <ProductItem
              product_name="Nivea Soft Jar Moisturising Cream"
              product_image_src="/src/assets/images/product-four.png"
              product_rating_star={5}
              product_rating_count={16}
              product_new_price={1250.0}
              product_old_price={1250.0}
              product_discount={-45}
            />
          </div>
          <div className="col-md-4">
            <ProductItem
              product_name="Nivea Soft Jar Moisturising Cream"
              product_image_src="/src/assets/images/product-two.png"
              product_rating_star={5}
              product_rating_count={16}
              product_new_price={1250.0}
              product_old_price={1250.0}
              product_discount={-45}
              is_sale={true}
            />
          </div>
          <div className="col-md-4">
            <ProductItem
              product_name="Nivea Soft Jar Moisturising Cream"
              product_image_src="/src/assets/images/product-four.png"
              product_rating_star={5}
              product_rating_count={16}
              product_new_price={1250.0}
              product_old_price={1250.0}
              product_discount={-45}
            />
          </div>
          <div className="col-md-4">
            <ProductItem
              product_name="Nivea Soft Jar Moisturising Cream"
              product_image_src="/src/assets/images/product-one.png"
              product_rating_star={5}
              product_rating_count={16}
              product_new_price={1250.0}
              product_old_price={1250.0}
              product_discount={-45}
            />
          </div>
          <div className="col-md-4">
            <ProductItem
              product_name="Nivea Soft Jar Moisturising Cream"
              product_image_src="/src/assets/images/product-three.png"
              product_rating_star={5}
              product_rating_count={16}
              product_new_price={1250.0}
              product_old_price={1250.0}
              product_discount={-45}
            />
          </div>
          <div className="col-md-4">
            <ProductItem
              product_name="Nivea Soft Jar Moisturising Cream"
              product_image_src="/src/assets/images/product-two.png"
              product_rating_star={5}
              product_rating_count={16}
              product_new_price={1250.0}
              product_old_price={1250.0}
              product_discount={-45}
              is_sale={true}
            />
          </div>
        </div>
        <div className="product-more-button">
          <a href="#">Load More</a>
        </div>
      </div>
    </>
  );
};

export default ProductLists;
