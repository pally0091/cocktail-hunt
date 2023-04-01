import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cocktails from "./Components/Cocktails/Cocktails";
import About from "./Components/Home/About/About";
import Home from "./Components/Home/Home";
import Main from "./Components/Main";
import Drink from "./Components/Cocktails/Drink";
import Alcoholic from "./Components/Cocktails/Alcoholic";
import NonAlcoholic from "./Components/Cocktails/NonAlcoholic";
import CatCocktail from "./Components/Cocktails/CatCocktail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("www.thecocktaildb.com/api/json/v1/1/random.php"),
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/cocktails",
          element: <Cocktails></Cocktails>,
          children: [
            {
              path: "/cocktails",
              element: <Drink></Drink>,
            },
            {
              path: "/cocktails/drink",
              element: <Drink></Drink>,
            },
            {
              path: "/cocktails/alcoholic",
              element: <Alcoholic></Alcoholic>,
            },
            {
              path: "/cocktails/noalcoholic",
              element: <NonAlcoholic></NonAlcoholic>,
            },
            {
              path: "/cocktails/coktail",
              element: <CatCocktail></CatCocktail>,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
