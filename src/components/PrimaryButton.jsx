import React from "react";
import "./PrimaryButton.css";

function PrimaryButton({ onClick, children }) {
  return (
    <button className="primary-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;
