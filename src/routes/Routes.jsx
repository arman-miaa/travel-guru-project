import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
    {
      path: "login",
      element: <Login></Login>,
    },
    {
      path: "register",
      element: <Register></Register>,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);


export default router;
