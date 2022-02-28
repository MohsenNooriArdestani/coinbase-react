import Home from "../pages/home";
import DefaultLayout from "../layout/default";
const mainRoutes = {
  path: "/",
  element: <DefaultLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};
export default mainRoutes;
