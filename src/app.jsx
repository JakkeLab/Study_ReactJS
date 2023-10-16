import React from "react";

import "./global.css";
import { HelloContext } from "./components/hello-context";
import { HelloCheckBox } from "./components/hello-checkbox";
import { HelloForm } from "./components/hello-form";

export function App() {
  return (
    <>
      <div>
        <HelloContext>
          <HelloCheckBox />
          <HelloForm />
        </HelloContext>
      </div>
    </>
  );
}

// import { HelloListApi } from "./components/hello-list-api";
// import { HelloRef } from "./components/hello-ref";
// import { HelloMemo } from "./components/memo/hello-memo";
// import { HelloPortal } from "./components/hello-portal";

// 6 import { HelloCheckBox } from "./components/hello-checkbox";
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
