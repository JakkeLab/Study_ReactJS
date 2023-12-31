import React from "react";
import { useState, useEffect } from "react";
import { useRandomUsers } from "../utils/hello-hook";

export const HelloListApi = () => {
  const users = useRandomUsers(3);

  return (
    <ul>
      {Boolean(users.length) &&
        users.map((user, index) => {
          const name = user.name.first;
          const key = `${name}${index}`;
          return <li key={key}>{name}</li>;
        })}
    </ul>
  );
};
