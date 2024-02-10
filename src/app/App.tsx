import type { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
