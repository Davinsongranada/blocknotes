import "./STodoItem.css"
import { VscCheck } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";

import React from "react";

export default function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}>
        <VscCheck />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete"
      onClick={onDelete}><VscTrash /></span>
    </li>
  );
}
