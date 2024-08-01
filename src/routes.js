import App from "./App";
import Homepage from "./pages/Homepage";
import BrowseFruitsPage from "./pages/BrowseFruitsPage";
import FruitDetailsPage from "./pages/FruitDetailsPage";
import NewFruitForm from "./components/NewFruitForm";

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
        element: <NewFruitForm />
      }
    ]
  },
];

export default routes;