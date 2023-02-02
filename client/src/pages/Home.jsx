import React from "react";

import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
