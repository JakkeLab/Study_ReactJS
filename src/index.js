import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function getGreetElement(name, link) {
//     const message = `Hello, ${name}`;
//     return (
//         <div>
//             <h1>{message}</h1>
//             <a href={link}>link</a>
//         </div>
//     );
// }

// const block = getGreetElement("Jakke", "https://www.google.com/");

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
