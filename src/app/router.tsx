import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { WishListDetailedPage } from "@/pages/wish-list-detailed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/wish-list/:wishListId",
    element: <WishListDetailedPage />,
  },
]);
