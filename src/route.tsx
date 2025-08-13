import { createBrowserRouter } from "react-router-dom";
import Location from "./Page/Location";
import Leeds from "./Page/Location/leeds";
import MainLayout from "./components/Layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Location /> },
      { path: "/leeds", element: <Leeds /> },
    ],
  },
]);