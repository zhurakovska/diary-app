import React from "react";
import "./ButtonSave.css";
import { useState } from "react";

export const ButtonSave = ({ text }) => {
  return <button className="button-save">{text}</button>;
};
