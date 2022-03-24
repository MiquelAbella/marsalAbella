import React from "react";
import './separator.css'

export const Separator = ({text}) => {
  return <div className="separator">
      <h1 className="separator-text">{text}</h1>
  </div>;
};
