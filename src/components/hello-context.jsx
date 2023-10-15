import { createContext, useState } from "react";
import { HelloCheckBox } from "./hello-checkbox";
import { HelloForm } from "./hello-form";

export const MyContext = createContext();

export const HelloContext = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <MyContext.Provider value={[isChecked, setIsChecked]}>
      <HelloCheckBox></HelloCheckBox>
      <HelloForm></HelloForm>
    </MyContext.Provider>
  );
};
