import React from "react";
import { useLoaderData } from "react-router-dom";
// import DrinkCard from "./DrinkCard";

const NonAlcoholic = () => {
  const data = useLoaderData();
  console.log(data.drinks);
  const drinks = data.drinks;
  console.log(drinks);
  return (
    <div>
      {/* <p>There are {drinks.length} drinks found</p>
      <div className="bg-yellow-200 grid lg:grid-cols-3 sm:grid-cols-1 min-[320px]:srid-cols-1 gap-2 w-[96%] mx-auto p-2">
        {drinks.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink}
          ></DrinkCard>
        ))}
      </div> */}
    </div>
  );
};

export default NonAlcoholic;
