import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import App from './App';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Provider/AuthProvider';
import Login from './Components/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/registration',
      element:<Registration></Registration>
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
