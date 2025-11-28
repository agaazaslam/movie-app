import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Trending from "../pages/Trending";
import Popular from "../pages/Popular";
import Search from "../pages/Search";
import Movie from "../pages/Movie";
import RootLayout from "../layout/RootLayout";


export const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,

    children: [
      { index: true, element: <Home /> },
      { path: "trending", element: <Trending /> },
      { path: "popular", element: <Popular /> },
      { path: "search", element: <Search /> },
      {
        path: "movies", children: [

          {
            path: ":movieId", element: <Movie />
          },
        ]
      },

      { path: "search ", element: <Search /> },


    ],




  }


]);

