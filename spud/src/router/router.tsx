import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

const Router: React.FC = () => {

    const router = createBrowserRouter(Routes());

    return(
        <RouterProvider router={router}/>
    );
};

export default Router;
