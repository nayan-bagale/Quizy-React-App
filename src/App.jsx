import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";
import { UserAuth } from "./ContextApi/AuthContext";
import { PrivateContextProvider } from "./ContextApi/PrivateContext";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import Private from "./pages/private/Private";
import LoaderWatch from "./Components/Loader/Watch";
import { useState } from "react";

function App() {
  const { user } = UserAuth();
  const [isAuth, setIsAuth] = useState(false);

  setTimeout(() => {
    setIsAuth(true);
  }, 5000);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Layout /> : isAuth ? <Auth /> : <LoaderWatch />,
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
      element: (
        <PrivateContextProvider>
          <Private />
        </PrivateContextProvider>
      ),
      errorElement: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
