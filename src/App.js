import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Help from "./pages/Help";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "help/:id/",
      element: <Help></Help>,
    },
    {
      path: "about",
      element: <About></About>,
    },

    {
      path: "login",
      element: <Login></Login>,
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
