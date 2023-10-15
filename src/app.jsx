import React from "react";
import "./global.css";
import { HelloRef } from "./components/hello-ref";

export function App() {
  return (
    <>
      <HelloRef></HelloRef>
    </>
  );
}

// import { HelloListApi } from "./components/hello-list-api";

// import { HelloCheckBox } from "./components/hello-checkbox";
// import { HelloButton } from "./components/hello-button";
// import { HelloWorld } from "./components/hello-world";
// import { HelloList } from "./components/hello-list";
// export function App() {
//   const person = { name: "Jakke", surname: "lab" };
//   return (
//     <>
//       <HelloCheckBox person={person} />
//       <HelloButton person={person} />
//       <HelloWorld person={person} />
//       <HelloList names={["Apple", "Banana", "Cherry"]} />
//     </>
//   );
// }
