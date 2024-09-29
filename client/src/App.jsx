import React from 'react';
import HomePage from './routes/homePage/homePage';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/singlePage';
import {
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";
import { Layout } from './routes/layout/Layout';
import ProfilePage from './routes/profilePage/profilePage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path : "/",
          element: <HomePage />
        },
        {
          path : "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router = {router}/>
  )
}

export default App;
