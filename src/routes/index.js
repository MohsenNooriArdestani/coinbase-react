import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import mainRoutes from "./mainRoutes";
const AppRoutes = () => {
  const location = useLocation();
  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return useRoutes([mainRoutes]);
};
export default AppRoutes;
