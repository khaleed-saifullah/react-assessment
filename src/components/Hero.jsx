import React from "react";

const Hero = ({ title, breadcumb_item, breadcumb_item_active }) => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-breadcumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">{breadcumb_item}</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {breadcumb_item_active}
                </li>
              </ol>
            </div>
            <h2 className="hero-title">{title}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
