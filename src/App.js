
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cocktails from './Components/Cocktails/Cocktails';
import About from './Components/Home/About/About';
import Home from './Components/Home/Home';
import Main from './Components/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/about',
          element:<About></About>
        },
        {
          path: '/cocktails',
          element: <Cocktails></Cocktails>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
