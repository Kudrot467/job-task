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
import Dashboard from './Components/Dashboard/Dashboard';
import MyProfile from './Components/Dashboard/MyProfile/MyProfile';
import AddTask from './Components/Dashboard/AddTask/AddTask';
import UserHome from './Components/Dashboard/UserHome/UserHome';
import Tasks from './Components/Dashboard/Tasks/Tasks';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
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
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
    {
       path:'userHome',
       element:<UserHome></UserHome>
    },
    {
        path:'myProfile',
        element:<MyProfile></MyProfile>
    },
    {
      path:'addTask',
      element:<AddTask></AddTask>
    },
    {
      path:'tasks',
      element:<Tasks></Tasks>
    }
  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
  </AuthProvider>
  </React.StrictMode>,
)
