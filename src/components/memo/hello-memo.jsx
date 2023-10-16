import { useEffect, useState, createContext } from "react";
import { MemoChild } from "./memo-child";

export const CustomContext = createContext(false);

export const HelloMemo = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log("HeloMemo componenet rendered!");
  });

  const changeHandler = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <CustomContext.Provider value={isChecked}>
      <input onChange={changeHandler} type="checkbox" />
      <MemoChild />
    </CustomContext.Provider>
  );
};
