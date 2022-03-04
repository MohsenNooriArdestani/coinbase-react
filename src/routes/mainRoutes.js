import DefaultLayout from "../layout/default";
import Home from "../pages/Home";
import Prices from "../pages/Prices";
import Price from "../pages/Price";
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
    {
      path: "/price/:id",
      element: <Price />,
    },
  ],
};
export default mainRoutes;
