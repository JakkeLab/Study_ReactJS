import { useContext } from "react";
import { ApplicationContext } from "../app-context";

export const HelloCheckBox = () => {
  const [state, dispatch] = useContext(ApplicationContext);

  const onChangeHandler = (event) => {
    const isChecked = event.target.checked;
    const type = isChecked ? "CHECK" : "UNCHECK";
    dispatch({type});
  };

  return (
    <>
      <input onChange={onChangeHandler} type="checkbox" />
      {state.isChecked ? <p>This is checked!</p> : <p>Nope!</p>}
    </>
  );
};
