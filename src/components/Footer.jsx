import React from "react";
import FooterInfo from "./FooterInfo";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <FooterInfo />
              </div>
              <div className="col-md-3">
                <FooterMenu
                  menu_title="Categories"
                  menu_item={[
                    "Makeup",
                    "Skin Care",
                    "Bath and Body",
                    "Hair Care",
                    "Personal Care",
                    "Sexual Wellness",
                  ]}
                />
              </div>
              <div className="col-md-3">
                <div className="footer-menu">
                  <FooterMenu
                    menu_title="Quick Links"
                    menu_item={[
                      "Offers",
                      "Seller Picks",
                      "Campaigns",
                      "Hair Care",
                    ]}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-menu">
                  <FooterMenu
                    menu_title="Support"
                    menu_item={[
                      "Return Policy",
                      "Terms of Use",
                      "Privacy Policy",
                      "FAQS",
                      "Shipping &amp; Delivery",
                      "Contact Us",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright @ 2023 Anghorag. All Right Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
