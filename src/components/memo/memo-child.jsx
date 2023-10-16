import React, { useEffect } from "react";
import { MemoContext } from "./memo-context";

export const MemoChild = React.memo(() => {
  useEffect(() => {
    console.log("MemoChild rendered!");
  });

  return <MemoContext />;
});
