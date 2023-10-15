import { useState, useEffect } from "react";

export const HelloCounter = () => {
  const [wallCount, setWallCount] = useState(0);
  const [slabCount, setSlabCount] = useState(0);

  useEffect(() => {
    console.log("Counter updated to: " + wallCount);
    document.title = `Count: ${wallCount}`;
  }, [wallCount]);

  useEffect(() => {
    console.log("Hei");
  }, []);

  return (
    <>
      <div>Counter: {wallCount}</div>
      <button
        onClick={() => {
          setWallCount(wallCount + 1);
        }}
      >
        Walls
      </button>
      <div>Counter: {slabCount}</div>
      <button
        onClick={() => {
          setSlabCount(slabCount + 1);
        }}
      >
        Slabs
      </button>
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
