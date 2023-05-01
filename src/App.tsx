import { AdminPage, PlayerPage } from "$pages";
import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/player',
        element: <PlayerPage />,
    },
    {
        path: '/admin',
        element: <AdminPage />,
    },
]);

  const App: FC = () => {
    return <RouterProvider router={router} />
  }

  export default App;