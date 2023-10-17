import "./styles.css";
import React from "react";

export function HelloWorld({ person }) {
  const style = {
    color: "blue",
  };

  const { name, surname } = person;
  return (
    <h1 style={style} className="hello-world">
      Hello {name} {surname}!
    </h1>
  );
}
