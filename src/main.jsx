import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Root from './pages/Root.jsx';
import Home from './pages/Home.jsx';
import Lottery from './pages/Lottery.jsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: '/',
                element: <Home />,
            },
            {
                path: '/lottery',
                element: <Lottery />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
