import React from 'react';
import HomePage from './routes/homePage/homePage';
import ListPage from './routes/listPage/ListPage';
import {
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";
import { Layout } from './routes/layout/Layout';

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
        }
      ]
    },
  ]);

  return (
    <RouterProvider router = {router}/>
  )
}

export default App;
