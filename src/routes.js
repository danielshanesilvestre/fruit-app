import App from "./App";
import Homepage from "./pages/Homepage";
import BrowseFruitsPage from "./pages/BrowseFruitsPage";
import FruitDetailsPage from "./pages/FruitDetailsPage";
import NewFruitPage from "./pages/NewFruitPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/fruits",
        element: <BrowseFruitsPage />,
      },
      {
        path: "/fruits/:id",
        element: <FruitDetailsPage />
      },
      {
        path: "/new",
        element: <NewFruitPage />
      }
    ]
  },
];

export default routes;