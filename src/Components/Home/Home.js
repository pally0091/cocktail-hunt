/* eslint-disable jsx-a11y/img-redundant-alt */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [item, setItem] = useState();
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setItem(data.drinks[0]));
  }, []);

  console.log(item);
  return (
    <div
      id="homepage"
      className="flex lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col lg:p-20 sm:p-2 min-[320px]:p-1 bg-amber-600 m-10 items-center"
    >
      <div className="lg:w-1/2 sm:w-[95%] min-[320px]:w-[95%] p-3 ">
        <div className="border-2 p-4 rounded-lg bg-indigo-600 shadow-inner shadow-black">
          <img
            src={item?.strDrinkThumb}
            alt="image"
          />
          <p className="text-white font-semibold">{item?.strDrink}</p>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-[95%] min-[320px]:w-[95%] p-3 bg-black opacity-90 rounded-lg">
        <h2 className="text-3xl font-bold my-5 text-white">Welcome !!</h2>
        <div className="border-2 p-4 rounded-lg">
          <h3 className="my-10 text-xl text-white">
            Want some cocktails & drinks ..?{" "}
          </h3>
          <Link
            className="bg-lime-200 p-3 rounded-lg hover:bg-lime-400 hover:shadow-md hover:shadow-black"
            to="/cocktails"
          >
            Click Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
