import DefaultLayout from "../layout/default";
import Home from "../pages/Home";
import Prices from "../pages/Prices";
const mainRoutes = {
  path: "/",
  element: <DefaultLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/prices",
      element: <Prices />,
    },
  ],
};
export default mainRoutes;
