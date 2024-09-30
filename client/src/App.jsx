import React from 'react';
import HomePage from './routes/homePage/homePage';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/singlePage';
import {
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";
import { Layout, RequireAuth } from './routes/layout/Layout';
import ProfilePage from './routes/profilePage/profilePage';
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage';
import RegisterPage from './routes/register/register';
import LoginPage from './routes/login/login';
import NewPostPage from './routes/newPostPage/newPostPage';
import { listPageLoader, singlePageLoader } from './lib/loaders';

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
          element: <ListPage />,
          loader : listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader : singlePageLoader,
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/register",
          element: <RegisterPage />
        },
        {
          path: "/login",
          element: <LoginPage />
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router = {router}/>
  )
}

export default App;
