import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";
import { UserAuth } from "./ContextApi/AuthContext";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Private from "./pages/private/Private";

function App() {
  const { user } = UserAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Layout /> : <Auth />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "questions",
          element: <Questions />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/form/:id",
      element: <Private />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
