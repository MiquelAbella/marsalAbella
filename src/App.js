import React from "react";
import { About } from "./components/about/About";
import "./App.css";
import { Main } from "./components/main/Main";
import { Estacions } from "./components/estacions/Estacions";
import { Separator } from "./components/separator/Separator";
import { Work } from "./components/work/Work";

import uskBackground from "./assets/uskBackground.jpeg";

import aqueducte from "./assets/usk/Aqüeducte Tarragona.jpg";
import cadaqués from "./assets/usk/Cadaqués.png";
import campsElisis from "./assets/usk/Camps Elisis.jpg";
import cavalls from "./assets/usk/cavalls.jpg";
import centralPark from "./assets/usk/Central Park.jpg";
import dragonKhan from "./assets/usk/Dragon Khan.jpg";
import hurghada from "./assets/usk/Hurghada.jpg";
import taull from "./assets/usk/Taüll.jpg";

import newsPaper from "./assets/newsPaper.jpg";

import thePope from "./assets/premsa/thePope.jpg";
import marçalada from "./assets/premsa/marçalada.jpg";
import Farrus from "./assets/premsa/Farrus.png";
import hospital from "./assets/premsa/hospital.jpg";
import pinetell from "./assets/premsa/pinetell.jpg";
import pixador from "./assets/premsa/pixador.jpg";
import araLleida from "./assets/premsa/araLleida.jpg";
import docuSport from "./assets/premsa/docuSport.jpg";
import laPaeria from "./assets/premsa/laPaeria.jpg";
import Miting from "./assets/premsa/Miting.png";
import revistaPinzell from "./assets/premsa/revistaPinzell.jpg";
import comicBackground from "./assets/comicBackground.jpg";

import disney from "./assets/estrangeres/disney.jpg";
import playmobil from "./assets/estrangeres/playmobil.jpg";
import bibiUndTina from "./assets/estrangeres/bibiUndTina.jpg";
import bumni from "./assets/estrangeres/bumni.jpg";

export const App = () => {
  const uskArray = [
    aqueducte,
    cadaqués,
    campsElisis,
    cavalls,
    centralPark,
    dragonKhan,
    hurghada,
    taull,
  ];

  const uskTextArray = [
    "Aqüeducte de Tarragona",
    "Cadaqués",
    "Camps Elisis (Lleida)",
    "Cavalls al Pla de Beret",
    "Central Park",
    "Dragon Khan (Port Aventura)",
    "Hurghada (Egipte)",
    "Taüll",
  ];

  const premsaArray = [
    thePope,
    marçalada,
    Farrus,
    hospital,
    pinetell,
    pixador,
    araLleida,
    docuSport,
    laPaeria,
    Miting,
    revistaPinzell,
  ];
  const premsaTextArray = [
    "The Pope",
    "La Marçalada",
    "Els Farrús",
    "Hospital Central",
    "El nou Pinetell",
    "Lo Pixador de la banqueta",
    "Revista Ara Lleida",
    "Revista DocuSport",
    "Revista La Paeria",
    "Miting",
    "Revista Pinzell",
  ];

  const estrangeresArr = [disney, playmobil, bibiUndTina, bumni];
  const estrangeresTextArr = ["Disney", "Playmobil", "Bibi Und Tina", "Bumni"];

  const uskLink =
    "http://marsalabella.blogspot.com/search/label/Urban%20Sketchers";

  const premsaLink =
    "http://marsalabella.blogspot.com/search/label/Els%20Farr%C3%BAs";

  const comicLink = "http://marsalabella.blogspot.com/search/label/Disney";

  return (
    <div className="App-container">
      <Main />
      <About />
      <Estacions />
      <Separator text="URBAN SKETCHERS" />
      <Work
        imgArr={uskArray}
        textArr={uskTextArray}
        link={uskLink}
        background={uskBackground}
      />
      <Separator text="HUMOR GRÀFIC" />
      <Work
        imgArr={premsaArray}
        textArr={premsaTextArray}
        link={premsaLink}
        background={newsPaper}
      />
      <Separator text="PUBLICACIONS ESTRANGERES" />
      <Work
        imgArr={estrangeresArr}
        textArr={estrangeresTextArr}
        link={comicLink}
        background={comicBackground}
      />
    </div>
  );
};
