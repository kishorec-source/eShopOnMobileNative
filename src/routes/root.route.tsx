import { createBrowserRouter } from "react-router-dom";
import { CartPage, HomePage } from "../views";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
]);