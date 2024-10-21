import React from "react";
import "./STodoCounter.css";

export default function TodoCount({completed, total}) {
  return (
    <>
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total} TODOS</span>
      </h1>
    </>
  );
}
