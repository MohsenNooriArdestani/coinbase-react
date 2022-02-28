import { useRoutes } from "react-router-dom";
import mainRoutes from "./mainRoutes";
const AppRoutes = () => {
  return useRoutes([mainRoutes]);
};
export default AppRoutes;
