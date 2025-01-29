import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./router/Layout";
import Router from "./router/Router";
import PlayList from "./pages/PlayList";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Router /> },
        { path: "/songs", element: <PlayList /> },

      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
