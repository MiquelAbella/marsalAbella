import React from "react";
import "./about.css";
import fotoMarsal from "../../assets/fotoMarsal.jpeg";

export const About = () => {
  return (
    <div className="about">
      <img src={fotoMarsal} />

      <p>
        Dibuixant de còmics i il·lustrador, amb varis llibres publicats i
        col·laborador en premsa. Ha dibuixa per a Disney Europa i diferents
        editorials europees. Autor de la tira diària d'umor gràfic Els Farrús,
        la Marçalada, The Pope, Hospital Central, etc al diari la Manyana. Va
        dibuixar el còmic de CEHIMO Los templarios de Monzón amb guió de Mari
        Ángeles Mur. A l'actualitat dibuixa per a Comicon, llicenciatari de les
        revistes de playmobil que es publiquen en diferents països europeus i en
        revistes i llibres publicats a Alemanya. Guanyador del primer premi
        d'humor gràfic de Lousa. Participa en exposicions de pintura i humor
        gràfic. És integrant del grup de dibuixants Urban Sketchers de Lleida
      </p>
    </div>
  );
};
