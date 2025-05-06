import React from "react";

const FooterMenu = ({ menu_title, menu_item }) => {
  return (
    <>
      <div className="footer-menu">
        <h4>{menu_title}</h4>
        <ul>
          {menu_item.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FooterMenu;
