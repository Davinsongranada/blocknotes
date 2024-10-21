import React from "react";
import "./styleButton.css";

export default function CreateTodoButton() {
  return (
    <div>
      <button
        className="buttonCreate"
        onClick={() => {
          console.log("aqui hay click");
        }}
      >
        +
      </button>
    </div>
  );
}
