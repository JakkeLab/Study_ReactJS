import { useState } from "react";
export const HelloForm = () => {
  const clickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert(`Hello ${name} ${surname}!`);
    setName("");
    setSurname("");
  };
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <form>
      <label>
        Name:
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
      </label>
      <label>
        Surname
        <input
          value={surname}
          onChange={(event) => {
            setSurname(event.target.value);
          }}
        ></input>
      </label>
      <button onClick={clickHandler}>Submit!</button>
    </form>
  );
};
