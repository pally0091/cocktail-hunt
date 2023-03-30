import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
      <div>
        <div className="bg-red-400 pt-5 pb-3">
          <Link to="/">
            <h1 className="text-5xl font-bold">Cocktail Hunt</h1>
          </Link>
          <div className="mt-5">
            <NavLink
              className="bg-black text-white p-3 mx-2 rounded-t-xl border "
              to="/cocktails"
            >
              <button className="w-20">Cocktails</button>
            </NavLink>
            <NavLink
              className="bg-black text-white p-3 mx-2 rounded-t-xl border "
              to="/about"
            >
              <button className="w-20">About</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Nav;