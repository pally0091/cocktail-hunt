import React from "react";
import { useLoaderData } from "react-router-dom";

const CatCocktail = () => {
  const data = useLoaderData();
  console.log(data);
  const drinks = data.drinks;
  console.log(drinks);
  return (
    <div className="bg-yellow-200">
      <h2>Cocktail</h2>
    </div>
  );
};

export default CatCocktail;
