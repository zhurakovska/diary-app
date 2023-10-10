import React from "react";
import "./JournalItem.css";

export const JournalItem = ({ title, date, text }) => {
  const formatedDate = new Intl.DateTimeFormat("uk-UA").format(date);
  return (
    <>
      <div className="journal-item__header">{title}</div>
      <div className="journal-item__body">
        <div className="journal-item__date">{formatedDate}</div>
        <div className="journal-item__text">{text}</div>
      </div>
    </>
  );
};
