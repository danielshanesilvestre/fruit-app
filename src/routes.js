import Homepage from "./pages/Homepage";
import BrowseFruitsPage from "./pages/BrowseFruitsPage";
import NewFruitPage from "./pages/NewFruitPage";
import FruitPage from "./pages/FruitPage";

const routes = [
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/fruits",
    element: <BrowseFruitsPage />
  },
  {
    path: "/fruits/new",
    element: <NewFruitPage />
  },
  {
    path: "/fruits/:id",
    element: <NewFruitPage />
  }
];

export default routes;