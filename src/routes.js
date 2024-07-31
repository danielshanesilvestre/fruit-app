import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/fruits",
    element: <></>
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