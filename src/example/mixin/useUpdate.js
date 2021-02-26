import React, { useState, useEffect } from "react";

export const useUpdate = (fn, arr) => {
  const [nUpdateCount, setNUpdateCount] = useState(0);
  useEffect(() => {
    setNUpdateCount((n) => n + 1);
  }, arr);
  useEffect(() => {
    if (nUpdateCount > 1) {
      fn();
    }
  }, [nUpdateCount]);
};
