import {  createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/dashboard/mycart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/dashboard/all-users/AllUsers";
import AddItem from "../pages/dashboard/AddItem";
import AdminRoute from "./adminRoute";
import ManageItems from "../pages/dashboard/ManageItems";
import Payment from "../pages/dashboard/Payment";
import UserHome from "../pages/dashboard/UserHome";
import AdminHome from "../pages/dashboard/AdminHome";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/order/:id',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'user-home',
          element: <UserHome></UserHome>
        },
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'admin-home',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'all-users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'additem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manage-items',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);

export default router;