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

    const fetchNames = async () => {
      const response = await fetch("https://randomuser.me/api/?results=8");
      if (response) {
        const data = await response.json();
        const newNames = [];
        for (const result of data.results) {
          newNames.push(result.name.first);
        }
        // data.results.forEach((result) => {
        // });
        setNames(newNames);
      }
    };

    fetchNames();
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
