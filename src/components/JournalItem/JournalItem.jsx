import React from "react";
import "./JournalItem.css";

export const JournalItem = ({ title, date, text }) => {
  return (
    <div className="journal-item">
      <h2 className="journal-item__header">{title}</h2>
      <h2 className="journal-item__body">
        <h2 className="journal-item__date">{date.toString()}</h2>
        <h2 className="journal-item__text">{text}</h2>
      </h2>
    </div>
  );
};
