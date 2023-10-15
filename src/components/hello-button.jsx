import { useContext } from "react";
import { MyContext } from "./hello-context";

export const HelloButton = () => {
  const { person } = useContext(MyContext); //How to create object context

  const clickHandler = () => {
    alert(`Hello ${person.name}`);
  };

  return <button onClick={clickHandler}>Say hello!</button>;
};
