import Home from "./pages/Home";
import FruitsList from "./pages/FruitsList";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/fruits",
    element: <FruitsList />
  },
  {
    path: "/fruits/new",
    element: <></>
  },
  {
    path: "/fruits/:id",
    element: <></>
  }
];

export default routes;