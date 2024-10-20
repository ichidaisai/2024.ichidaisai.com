import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css/reset.css'
import './styles/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Pending } from './components/Pending'
import Layout from './Layout'
import { Home } from './pages/Home'
import { Guest } from './components/Guest'
import { Access } from './pages/Access'
import { Funding } from './pages/Founding'
import { PosterList } from './pages/PosterList'
import { Stage } from './pages/Stage'
import { StampRally } from "./pages/StampRally";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/pending',
                element: <Pending />,
            },
            {
                path: '/guest',
                element: <Guest />,
            },
            {
                path: '/access',
                element: <Access />,
            },
            {
                path: '/funding',
                element: <Funding />,
            },
            {
                path: '/poster',
                element: <PosterList />,
            },
            {
                path: '/stage',
                element: <Stage />,
            },
            {
                path: "/stamprally",
                element: <StampRally />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
