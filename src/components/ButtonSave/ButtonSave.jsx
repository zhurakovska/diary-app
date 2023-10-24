import React from "react";
import "./ButtonSave.css";
import { useState } from "react";

export const ButtonSave = ({ text, onClick }) => {
  return (
    <button className="button-save" onClick={onClick}>
      {text}
    </button>
  );
};
