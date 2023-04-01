import React from "react";
import { NavLink } from "react-router-dom";
import "./CocktailNav.css";

const CocktailNav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/cocktails/drink">
          <button className="bg-yellow-200 lg:p-2 min-[320px]:p-1 mt-1   mx-2 w-32">
            Drinks
          </button>
        </NavLink>
        <NavLink to="/cocktails/coktail">
          <button className="bg-yellow-200 lg:p-2 min-[320px]:p-1 mt-1  mx-2 w-32">
            Cocktails
          </button>
        </NavLink>
        <NavLink to="/cocktails/alcoholic">
          <button className="bg-yellow-200 lg:p-2 min-[320px]:p-1 mt-1  mx-2 w-32">
            Alcoholic
          </button>
        </NavLink>
        <NavLink to="/cocktails/noalcoholic">
          <button className="bg-yellow-200 lg:p-2 min-[320px]:p-1 mt-1 mx-2 w-32">
            Non Alcoholic
          </button>
        </NavLink>
      </nav>
    </div>
  );
};

export default CocktailNav;
