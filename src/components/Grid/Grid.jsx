import React from "react";
import "./Grid.css";

const list = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
  { id: 3, name: "three" },
  { id: 4, name: "four" },
  { id: 5, name: "five" },
];

export const JournalList = () => {
  return (
    <div className="journal-list">
      {list.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};
