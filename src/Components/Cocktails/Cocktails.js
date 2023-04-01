import React from "react";
import CocktailNav from "./CocktailNav";
import { Outlet } from "react-router-dom";

const Cocktails = () => {
  return (
    <div>
      <CocktailNav></CocktailNav>
      <Outlet></Outlet>
    </div>
  );
};

export default Cocktails;
