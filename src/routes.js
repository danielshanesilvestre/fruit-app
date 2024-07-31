import Homepage from "./pages/Homepage";
import BrowseFruitsPage from "./pages/BrowseFruitsPage";
import FruitPage from "./pages/FruitPage";
import NewFruitForm from "./components/NewFruitForm";

const routes = [
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/fruits",
    element: <BrowseFruitsPage />,
    children: [
      {
        path: "/fruits/new",
        element: <NewFruitForm />
      }
    ]
  },
  {
    path: "/fruits/:id",
    element: <FruitPage />
  }
];

export default routes;