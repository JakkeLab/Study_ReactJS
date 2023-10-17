import { useEffect, useContext } from "react";
import { ApplicationContext } from "../app-context";

export const HelloCounter = () => {
  const [state, dispatch] = useContext(ApplicationContext);
  const {count} = state;

  const handleClick = () => {
    dispatch({type:"INCREMENT"});
  }

  // useEffect(() => {
  //   console.log("Counter updated to: " + wallCount);
  //   document.title = `Count: ${wallCount}`;
  // }, [wallCount]);

  // useEffect(() => {
  //   console.log("Hei");
  // }, []);

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

// const data = { count: 0 };
// const [countData, setCountData] = useState(data);
// const onClick = () => {
//   const newData = { ...countData };
//   newData.count++;
//   setCountData(newData);
// };
// return (
//   <>
//     <div>Counter: {countData.count}</div>
//     <button onClick={onClick}>Press Here!</button>
//   </>
// );
