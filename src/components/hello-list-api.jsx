import { useState, useEffect } from "react";

export const HelloListApi = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    // fetch("https://randomuser.me/api/?results=5").then((reponse) => {
    //   if (reponse) {
    //     reponse.json().then((data) => {
    //       const newNames = [];
    //       data.results.forEach((result) => {
    //         newNames.push(result.name.first);
    //       });
    //       setNames(newNames);
    //     });
    //   }
    // });
  }, []);

  return (
    <ul>
      {Boolean(names.length) &&
        names.map((name, index) => {
          const key = `${name}${index}`;
          return <li key={key}>{name}</li>;
        })}
    </ul>
  );
};
