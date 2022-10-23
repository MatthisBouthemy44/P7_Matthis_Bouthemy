import React from "react";
import IconImage from "../../assets/icon-collapse.png"
// possible d'ajuster l'ouverture du collapse avec usestate

//Fonctions collpases
const Collapse = ({ title, content }) => {
  //On déclare si on clique dessus ou non 
  const isCollapse = (e) => {
    // Si il n'y a aucun événement on garde sa valeur par defaut 
    e.preventDefault();
    const divText = e.target.nextSibling;
    const arrow = e.target.lastChild;

    if (!divText.classList.contains("show")) {
      divText.classList.add("show");
      arrow.classList.add("rotate");
    } else {
      divText.classList.remove("show");
      arrow.classList.remove("rotate");
    }
  };
  return (
    <div className="collapse">
      {/*Titre boutton collpase et l'icon*/}
       <button type="button" className="collapse__button" onClick={isCollapse}>
        {title}
        <img src={IconImage}  className="collapse__arrow" alt="arrow" />
      </button>
      <div className="collapse__content">
        {/*Content collapse*/}

        {Array.isArray(content) ? (
          <ul className="collapse__list">

            {content.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__text">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
