import React from "react";
import { useLoaderData } from "react-router-dom";

const Alcoholic = () => {
  const data = useLoaderData();
  console.log(data);
  const drinks = data.drinks;
  console.log(drinks);
  return (
    <div className="bg-yellow-200">
      <h2>alcoholic</h2>
    </div>
  );
};

export default Alcoholic;
