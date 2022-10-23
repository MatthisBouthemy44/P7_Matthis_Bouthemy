import React from "react";

//je passe image et title en parametre pour pouvoir directement les appe;er dans mon composant react sur Home.

const Herobanner = ({ image, title }) => {
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb__img" />
      <div className="thumb__overlay"></div>
      <h2 className="thumb__title">{title}</h2>
    </div>
  );
};

export default Herobanner;
