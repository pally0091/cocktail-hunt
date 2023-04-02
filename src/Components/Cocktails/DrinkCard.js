import React from "react";

const DrinkCard = ({ drink }) => {
  const { idDrink, strDrink, strDrinkThumb } = drink;

  return (
    <div className="border-2 border-black p-2">
      <h2 className="text-xl font-semibold my-2">{strDrink}</h2>
      <div>
        <img
          src={strDrinkThumb}
          alt="Imgs"
        ></img>
      </div>
    </div>
  );
};

export default DrinkCard;
