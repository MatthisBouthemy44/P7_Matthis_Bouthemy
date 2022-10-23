import React from "react";
import { useState } from "react";

//Style
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

//Fonction qui prend en parametres les Url des images
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  //On recupere la taille du tableau
  const length = slides.length;

  //Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
  //Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.

  //fonction pour aller a l'image suivante
  const goToNext = () => {
    //Fonction ternaire qui permet de changer (avec sette setCurrent) la valeur de l'image actuelle(current).
    setCurrent(current === length - 1 ? 0 : current + 1);
    //on parcours le tableau avec la current si on arrive a la fin du tableau on modifier la valeur de current à 0 sinon on met current(valeur initiale) + 1
  };

  //fonction pour aller a l'image suivante
  const goToPrevious = () => {
    //Fonction ternaire qui permet de changer (avec setCurrent) la valeur de l'image actuelle(current).
    setCurrent(current === 0 ? length - 1 : current - 1);
    // Si current est égale a 0 et on veut revenir en arrière , on met la taille du tableau - 1 sinon on met current(valeur initiale) -1.
  };

  return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="slider__picture" />
            )}
          </div>
        );
      })}
      {/* get button if there are more thant one picture */}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={goToPrevious}>
            <img src={arrowLeft} alt="" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={goToNext}>
            <img src={arrowRight} alt="" className="slider__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ImageSlider;
