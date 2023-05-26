import {  createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login-register/Login";

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
        }
      ]
    },
  ]);

export default router;