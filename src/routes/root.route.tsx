import { createBrowserRouter } from "react-router-dom";
import { CartPage, HomePage } from "../views";
import CardLayers3d from "../components/details/cards.component";
import Ck4 from "../components/details/editor.component";
import ErrorPage from "../components/ErrorPage";
import TickTackToe from "../components/details/TickTackToe";

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
    path: "/home",
    element: <CardLayers3d />,
  },
  {
    path: "/ck4",
    element: <Ck4 />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
]);