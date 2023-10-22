import React from "react";
import { useState } from "react";
import { ButtonSave } from "../ButtonSave/ButtonSave";
import "./JournalForm.css";

export const JournalForm = () => {
  const [inputData, setInputData] = useState("");

  const inputChange = (event) => {
    setInputData(event.target.value);
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" value={inputData} onChange={inputChange} />
      <textarea name="post" id="" cols="30" rows="10"></textarea>
      <ButtonSave text="Save" />
    </form>
  );
};
