import React from "react";
import { useState } from "react";
import { ButtonSave } from "../ButtonSave/ButtonSave";
import "./JournalForm.css";

export const JournalForm = () => {
  const [inputData, setInputData] = useState("");

  const inputChange = (event) => {
    setInputData(event.target.value);
  };
  return (
    <form className="journal-form">
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" value={inputData} onChange={inputChange} />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <ButtonSave text="Save" />
    </form>
  );
};
