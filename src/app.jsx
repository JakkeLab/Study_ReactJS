import React from "react";
import "./global.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HelloListApi } from "./components/hello-list-api";
import { HelloWorld } from "./components/hello-world";

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HelloListApi />}></Route>
          <Route
            path="/list"
            element={<HelloWorld person={{ name: "Jakke", surname: "lab" }} />}
          ></Route>
        </Routes>
      </div>
    </Router>
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
