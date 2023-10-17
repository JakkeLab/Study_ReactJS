import React from "react";
import "./global.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HelloListApi } from "./components/hello-list-api";
import { HelloWorld } from "./components/hello-world";
=======
import { AppContext } from "./app-context";
import { HelloCheckBox } from "./components/hello-checkbox";
import { HelloCounter } from "./components/hello-counter";
import { HelloForm } from "./components/hello-form";
>>>>>>> d63021a9ba612daf4a007cd2883f439df9b4307f


export function App() {
  return (
<<<<<<< HEAD
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
=======
      <AppContext>
        <HelloCheckBox/>
        <HelloForm/>
        <HelloCounter/>
      </AppContext>
>>>>>>> d63021a9ba612daf4a007cd2883f439df9b4307f
  );
}

// import { HelloListApi } from "./components/hello-list-api";
// import { HelloRef } from "./components/hello-ref";
// import { HelloMemo } from "./components/memo/hello-memo";
// import { HelloPortal } from "./components/hello-portal";
// import { HelloContext } from "./components/hello-context";
// import { HelloCheckBox } from "./components/hello-checkbox";
// import { HelloForm } from "./components/hello-form";

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
