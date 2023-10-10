import React from "react";
import "./ButtonSave.css";
import { useState } from "react";

export const ButtonSave = () => {
  const [text, useText] = useState("Сохранить");
  console.log(text);
  const clicked = () => {
    useText((t) => t + "!");
    console.log(text);
  };
  return (
    <button onClick={clicked} className="button-save">
      {text}
    </button>
  );
};
