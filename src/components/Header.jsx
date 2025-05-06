import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#">
                <img src="/src/assets/images/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <div className="header-top-right">
                  <div className="header-search">
                    <div className="header-search-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search for products..."
                      />
                      <div className="header-search-input-icon">
                        <i className="bi bi-search" />
                      </div>
                    </div>
                  </div>
                  <div className="header-account-button">
                    <a href="#">
                      <i className="bi bi-person" />
                      Account
                    </a>
                  </div>
                  <div className="header-cart-button">
                    <i className="bi bi-bag" />
                    Cart
                    <span>(0)</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="header-bottom-inner">
              <div className="header-bottom-dropdown-menu">
                <div className="header-bottom-dropdown-menu-button">
                  <div className="header-bottom-dropdown-menu-button-name">
                    <i className="bi bi-list" />
                    CATEGORIES
                  </div>
                  <span className="header-bottom-dropdown-menu-button-icon">
                    <i className="bi bi-chevron-down" />
                  </span>
                </div>
              </div>
              <div className="header-bottom-button">
                <a href="#" className="header-bottom-button-one">
                  Offers
                </a>
                <a href="#" className="header-bottom-button-two">
                  Seller Picks
                </a>
                <a href="#" className="header-bottom-button-three">
                  Campaign
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
