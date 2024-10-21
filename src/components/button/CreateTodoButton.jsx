import React from "react";
import "./styleButton.css";

export default function CreateTodoButton({ setOpenModal }) {
  return (
    <div>
      <button
        className="buttonCreate"
        onClick={() => {
          setOpenModal(state => !state)
        }}
      >
        +
      </button>
    </div>
  );
}
