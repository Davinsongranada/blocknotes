import React from "react";
import "./STodoCounter.css";
import { TodoContext } from "../TodoContext/Context";

export default function TodoCount() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <>
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos} TODOS</span>
      </h1>
    </>
  );
}
